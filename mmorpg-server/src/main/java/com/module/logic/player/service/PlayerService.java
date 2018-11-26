package com.module.logic.player.service;

import com.common.resource.provider.StaticResourceProvider;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.account.entity.AccountEntity;
import com.module.logic.account.manager.AccountManager;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.packet.*;
import com.module.logic.monster.manager.MonsterManager;
import com.module.logic.monster.resource.Monster;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.vo.ObjectInMapInfo;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Component
public class PlayerService {

    Logger logger= LoggerFactory.getLogger(PlayerService.class);

    private Map<Long,Player> id2player=new HashMap<>();
    private Map<Long,PlayerEntity> id2PlayerEntity=new HashMap<>();

    @Autowired
    PlayerManager playerManager;

    public void createRole(Session session, ReqCreateRolePacket reqCreateRolePacket){

        String name=reqCreateRolePacket.getPlayerName();
        RoleType roleType=reqCreateRolePacket.getRoleType();
        String sex=reqCreateRolePacket.getSex();
        logger.info("角色名："+name+"\t角色类型为："+roleType.name()+"\t性别:"+sex);
        String account=session.getAccount(Constants.SESSION_ID);
        PlayerEntity playerEntity=playerManager.createPlayerEntity(account,name,roleType,sex);
        if(playerEntity!=null){
            //添加到数据库成功
            boolean status=playerManager.createRole(playerEntity);
            String result=null;
            if(status){
                playerManager.updateAccount(playerEntity,account);

                Player player=initPlayer(playerEntity);
                id2player.put(player.getId(),player);
                result="角色创建成功..";
                logger.info("角色创建成功...");
            }else{
                result="角色创建失败..";
                logger.info("角色创建失败...");
            }
            //返回信息
            RespCreateRolePacket respCreateRolePacket=new RespCreateRolePacket();
            respCreateRolePacket.setPlayerId(playerEntity.getPlayerId());
            respCreateRolePacket.setResult(result);
            PacketUtil.sendPacket(session,respCreateRolePacket);
        }
    }

    public Player initPlayer(PlayerEntity playerEntity){
        Player player=new Player();
        player.setId(playerEntity.getPlayerId());
        player.setPlayerEntity(playerEntity);
        playerEntity.setPlayer(player);
        // TODO 其他的初始化玩家的信息
        return player;
    }

    public void roleLogin(Session session, ReqRoleLoginPacket reqRoleLoginPacket){

        //角色登录逻辑
        long playerId=reqRoleLoginPacket.getPlayerId();
        boolean statue=playerManager.roleLogin(playerId);
        String result=null;
        if(statue){
            Player player=id2player.get(playerId);
            //角色登录成功则将session与Player添加进集合
            playerManager.addSession2Player(session,player);
            result="角色登录成功";
            logger.info("角色登录成功...");
        }else{
            result="角色登录失败";
            logger.info("角色登录失败...");
        }

        //发送角色登录成功响应包
        RespRoleLoginPacket respRoleLoginPacket=new RespRoleLoginPacket();
        respRoleLoginPacket.setPlayerId(playerId);
        respRoleLoginPacket.setResult(result);
        PacketUtil.sendPacket(session,respRoleLoginPacket);
    }

    public void enterWorld(Session session,ReqEnterScenePacket reqEnterScenePacket){
        Player player=playerManager.getPlayer2session().inverse().get(session);
        long mapId=reqEnterScenePacket.getSceneId();
        MapManager.getInstance().enterWorld(mapId,player);

        //用来存放场景里所有的生物
        List<ObjectInMapInfo> objects=new ArrayList<>();
        //存放场景里面npc
        Map<Long, MapInstance> mapId2MapInstance=MapManager.getInstance().getId2Map();
        logger.info("mapId为1001的地图对象为空否？"+mapId2MapInstance.get(mapId));
        MapInstance mapInstance=mapId2MapInstance.get(mapId);
        Map<Long,MapObject> id2MapInstance=mapInstance.getObjectInMap();
        //向场景打印npc信息
        //将MapObject转为ObjectInfo放进响应包
        id2MapInstance.forEach((k,p)->{
            objects.add(ObjectInMapInfo.valueOf(p));
        });
        //发送响应进入场景的包
        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
        respEnterScenePacket.setSceneId(mapId);
        //将场景里面所有的物体加载到响应包里面
        respEnterScenePacket.setMapObject(objects);
        PacketUtil.sendPacket(session,respEnterScenePacket);

        RespBroadcastEnterWorldPacket respBroadcastEnterWorldPacket=new RespBroadcastEnterWorldPacket();
        respBroadcastEnterWorldPacket.setMapId(mapId);
        respBroadcastEnterWorldPacket.setPlayerId(player.getPlayerEntity().getPlayerId());
        respBroadcastEnterWorldPacket.setResult("成功进入场景");
        //封装成一个广播包会比较好
        PacketUtil.broadcast(session,respBroadcastEnterWorldPacket);
    }

    /**
     * 切换场景
     * @param session
     * @param reqChangeMapInstancePacket
     */
    public void changeMapInstance(Session session, ReqChangeMapInstancePacket reqChangeMapInstancePacket){
        //要切换场景要进行那些处理？
        //判断场景是否相邻
        long oldMapId=reqChangeMapInstancePacket.getOldMapId();
        long newMapId=reqChangeMapInstancePacket.getNewMapId();
        MapManager mapManager=MapManager.getInstance();
        MapInstance mapInstance1=mapManager.getMapInstance(oldMapId);
        MapInstance mapInstance2=mapManager.getMapInstance(newMapId);
        if(mapInstance1.getNeighborMark()!= mapInstance2.getNeighborMark()){
            return;
        }

        //玩家自身数据处理?比如，停止移动，清除要处理的消息，将玩家最新数据保存到数据库
        Player player=playerManager.getPlayer2session().inverse().get(session);
        PlayerEntity playerEntity=player.getPlayerEntity();
        playerManager.updatePlayerEntity(playerEntity);
        //将玩家对象从当前场景移除？
        mapInstance1.getObjectInMap().remove(player);
        mapInstance1.getPlayerInMap().remove(player);

        //广播玩家从当前场景离开
        RespBroadcastEnterWorldPacket respBroadcastEnterWorldPacket=new RespBroadcastEnterWorldPacket();
        respBroadcastEnterWorldPacket.setMapId(oldMapId);
        respBroadcastEnterWorldPacket.setPlayerId(playerEntity.getPlayerId());
        respBroadcastEnterWorldPacket.setResult("离开当前场景");
        PacketUtil.broadcast(session,respBroadcastEnterWorldPacket);

        //进入新场景
        ReqEnterScenePacket reqEnterScenePacket=new ReqEnterScenePacket();
        reqEnterScenePacket.setPlayerId(playerEntity.getPlayerId());
        reqEnterScenePacket.setSceneId(newMapId);
        enterWorld(session,reqEnterScenePacket);
    }

    public Player getPlayerById(long playerId) {
        return id2player.get(playerId);
    }

    public void setId2player(Map<Long, Player> id2player) {
        this.id2player = id2player;
    }

    public PlayerEntity getPlayerEntity(long playerId) {
        return id2PlayerEntity.get(playerId);
    }

    public void setId2PlayerEntity(Map<Long, PlayerEntity> id2PlayerEntity) {
        this.id2PlayerEntity = id2PlayerEntity;
    }

    public void addId2Player(long playerId,Player player){
        this.id2player.put(playerId,player);
    }
    public void addId2PlayerEntity(Long playerId, PlayerEntity playerEntity){
        this.id2PlayerEntity.put(playerId,playerEntity);
    }
}