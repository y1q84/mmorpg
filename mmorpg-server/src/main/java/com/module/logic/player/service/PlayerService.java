package com.module.logic.player.service;

import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.logic.position.InitialPosition;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.*;
import com.module.logic.player.packet.vo.ObjectInMapInfo;
import com.module.logic.player.packet.vo.RoleCreateInfo;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

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

    @Autowired
    PlayerManager playerManager;

    /**
     * 创建角色
     * @param session
     * @param reqCreateRolePacket
     */
    public void createRole(Session session, ReqCreateRolePacket reqCreateRolePacket){

        String name=reqCreateRolePacket.getPlayerName();
        RoleType roleType=reqCreateRolePacket.getRoleType();
        String sex=reqCreateRolePacket.getSex();
        logger.info("角色名："+name+"\t角色类型为："+roleType.name()+"\t性别:"+sex);
        String account=session.getAccount(Constants.SESSION_ID);
        PlayerEntity playerEntity=playerManager.findPlayerEntity(name);
        RespCreateRolePacket respCreateRolePacket=new RespCreateRolePacket();
        if(playerEntity!=null){
            respCreateRolePacket.setResult("角色创建失败..");
            PacketUtil.sendPacket(session,respCreateRolePacket);
            return;
        }
        playerEntity=playerManager.createPlayerEntity(account,name,roleType,sex);
        //向客户端返回新创建的角色对象
        RoleCreateInfo roleCreateInfo=new RoleCreateInfo();
        if(playerEntity!=null){
            //添加到数据库成功
            boolean status=playerManager.createRole(playerEntity);
            String result=null;
            if(status){
                playerManager.updateAccount(playerEntity,account);

                Player player=initPlayer(playerEntity);
                id2player.put(player.getId(),player);
                result="角色创建成功..";
                //初始化返回的角色信息
                roleCreateInfo=RoleCreateInfo.valueOf(playerEntity);
                logger.info("角色创建成功...");
            }else{
                result="角色创建失败..";
                logger.info("角色创建失败...");
            }
            //返回信息
            respCreateRolePacket.setPlayerId(playerEntity.getPlayerId());
            respCreateRolePacket.setResult(result);
            respCreateRolePacket.setRoleCreateInfo(roleCreateInfo);
            PacketUtil.sendPacket(session,respCreateRolePacket);
        }
    }

    /**
     * 初始化玩家信息
     * @param playerEntity
     * @return
     */
    public Player initPlayer(PlayerEntity playerEntity){
        Player player=new Player();
        player.setId(playerEntity.getPlayerId());
        player.setHp(playerEntity.getHp());
        player.setLevel(playerEntity.getLevel());
        //初始化玩家所在场景
        player.setMapId(playerEntity.getMapId());
        player.setPlayerEntity(playerEntity);
        playerEntity.setPlayer(player);
        // TODO 其他的初始化玩家的信息
        return player;
    }

    /**
     * 玩家登录
     * @param session
     * @param reqRoleLoginPacket
     */
    public void roleLogin(Session session, ReqRoleLoginPacket reqRoleLoginPacket){
        //如果登录成功则session2player有映射关系
        //如果两个页面登录同一账号，那么能够成功创建角色取决于谁先登录
        //角色登录逻辑
        long playerId=reqRoleLoginPacket.getPlayerId();
        boolean statue=playerManager.roleLogin(playerId);
        String result=null;
        if(statue){

            Player player=id2player.get(playerId);
            //获取存储在数据库中的玩家位置信息
            PlayerEntity playerEntity=player.getPlayerEntity();
            MapType mapType=playerEntity.getMapType();
            long mapId=playerEntity.getMapId();
            if(mapType!=null){
                if(mapId!=0){
                    player.setInitialPosition(new InitialPosition(mapId,mapType));
                }
            }
            //角色登录成功则将session与Player添加进集合
            playerManager.addSession2Player(session,player);
            //玩家登录成功之后初始化场景位置
            //第一次登录
            if(player.getInitialPosition()==null){
                //设置玩家初始位置信息
                InitialPosition initialPosition=new InitialPosition();
                initialPosition.setMapType(MapType.DEFAULT);
                player.setInitialPosition(initialPosition);
            }
            //初始化玩家在场景中的位置
            playerManager.getPositionHandlerByType(player.getInitialPosition().getMapType()).initialPostion(player);
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

    /**
     * 玩家进入场景
     * @param session
     * @param reqEnterScenePacket
     */
    public void enterWorld(Session session,ReqEnterScenePacket reqEnterScenePacket){
        Player player=playerManager.getPlayer2session().inverse().get(session);
        MapManager.getInstance().enterWorld(player);
        showCreatureInMap(session,player);

        RespBroadcastScenePacket respBroadcastScenePacket =new RespBroadcastScenePacket();
        respBroadcastScenePacket.setMapId(player.getMapId());
        respBroadcastScenePacket.setPlayerId(player.getPlayerEntity().getPlayerId());
        respBroadcastScenePacket.setResult("成功进入场景");
        //封装成一个广播包会比较好
        PacketUtil.broadcast(session, respBroadcastScenePacket);
    }

    /**
     * 显示场景内生物信息
     * @param session
     * @param player
     */
    public static void showCreatureInMap(Session session, Player player){
        //用来存放场景里所有的生物
        List<ObjectInMapInfo> objects=new ArrayList<>();
        //存放场景里面npc
        Map<Long, MapInstance> mapId2MapInstance=MapManager.getInstance().getId2Map();
        MapInstance mapInstance=mapId2MapInstance.get(player.getMapId());
        Map<Long,MapObject> id2MapInstance=mapInstance.getObjectInMap();
        //向场景打印npc信息
        //将MapObject转为ObjectInfo放进响应包
        id2MapInstance.forEach((k,p)->{
            objects.add(ObjectInMapInfo.valueOf(p));
        });
        //场景id集合
        List<Long> mapIds=new ArrayList<>();
        mapId2MapInstance.forEach((k,v)->{
            mapIds.add(k);
        });
        //发送响应进入场景的包
        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
        respEnterScenePacket.setSceneId(player.getMapId());
        respEnterScenePacket.setSceneIds(mapIds);
        //将场景里面所有的物体加载到响应包里面
        respEnterScenePacket.setMapObject(objects);
        PacketUtil.sendPacket(session,respEnterScenePacket);
    }

    /**
     * 切换场景
     * @param session
     * @param reqChangeMapInstancePacket
     */
    public void changeMapInstance(Session session, ReqChangeMapInstancePacket reqChangeMapInstancePacket){
        //要切换场景要进行那些处理？
        //判断场景是否相邻
        RespChangeMapInstancePacket respChangeMapInstancePacket=new RespChangeMapInstancePacket();
        long oldMapId=reqChangeMapInstancePacket.getOldMapId();
        long newMapId=reqChangeMapInstancePacket.getNewMapId();
        if(oldMapId==newMapId){
            respChangeMapInstancePacket.setResult("你已在当前场景中...");
            PacketUtil.sendPacket(session,respChangeMapInstancePacket);
            return ;
        }
        MapManager mapManager=MapManager.getInstance();
        MapInstance oldMapInstance=mapManager.getMapInstance(oldMapId);
        MapInstance newMapInstance=mapManager.getMapInstance(newMapId);
        if(oldMapInstance.getNeighborMark()!= newMapInstance.getNeighborMark()){
            respChangeMapInstancePacket.setResult("场景切换失败:非相邻场景不能切换...");
            PacketUtil.sendPacket(session,respChangeMapInstancePacket);
            return;
        }

        //玩家自身数据处理?比如，停止移动，清除要处理的消息，将玩家最新数据保存到数据库
        Player player=playerManager.getPlayer2session().inverse().get(session);
//        PlayerEntity playerEntity=player.getPlayerEntity();
//        playerManager.updatePlayerEntity(playerEntity);
        //向该场景的所有其他玩家广播该玩家退出场景，并刷新当前场景信息
        //session为当前要切换玩家的session，player为当前玩家
        session.setMapId(newMapId);
        playerManager.roleLogOut(session,player);
        respChangeMapInstancePacket.setResult("场景切换成功，你已从id为"+oldMapId+"的场景中离开...");
        PacketUtil.sendPacket(session,respChangeMapInstancePacket);

        //进入新场景
        ReqEnterScenePacket reqEnterScenePacket=new ReqEnterScenePacket();
        reqEnterScenePacket.setPlayerId(player.getPlayerEntity().getPlayerId());
        reqEnterScenePacket.setSceneId(newMapId);
        enterWorld(session,reqEnterScenePacket);
    }

    public Player getPlayerById(long playerId) {
        return id2player.get(playerId);
    }

    public void setId2player(Map<Long, Player> id2player) {
        this.id2player = id2player;
    }

    public void addId2Player(long playerId,Player player){
        this.id2player.put(playerId,player);
    }

}