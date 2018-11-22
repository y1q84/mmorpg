package com.module.logic.player.service;

import com.common.resource.provider.StaticResourceProvider;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.packet.ReqEnterScenePacket;
import com.module.logic.player.packet.RespBroadcastEnterWorldPacket;
import com.module.logic.player.packet.RespEnterScenePacket;
import com.module.logic.monster.manager.MonsterManager;
import com.module.logic.monster.resource.Monster;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.ReqCreateRolePacket;
import com.module.logic.player.packet.ReqRoleLoginPacket;
import com.module.logic.player.packet.RespCreateRolePacket;
import com.module.logic.player.packet.RespRoleLoginPacket;
import com.module.logic.player.packet.vo.ObjectInMapInfo;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Service
public class PlayerService {

    Logger logger= LoggerFactory.getLogger(PlayerService.class);

    private Map<Long,Player> id2player=new HashMap<>();

    @Autowired
    PlayerManager playerManager;
//    @Autowired
//    MonsterManager monsterManager;

    public void createRole(Session session, ReqCreateRolePacket reqCreateRolePacket){

        String name=reqCreateRolePacket.getPlayerName();
        logger.info("角色名："+name);
        RoleType roleType=reqCreateRolePacket.getRoleType();
        logger.info("角色类型为："+roleType.name());
        String sex=reqCreateRolePacket.getSex();
        logger.info("性别:"+sex);
        PlayerEntity playerEntity=playerManager.createPlayerEntity(session.getAccount(Constants.SESSION_ID),name,roleType,sex);
        Player player=initPlayer(playerEntity);
        id2player.put(player.getId(),player);
        if(playerEntity!=null){
            //添加到数据库成功
            //返回信息
            RespCreateRolePacket respCreateRolePacket=new RespCreateRolePacket();
            respCreateRolePacket.setPlayerId(playerEntity.getPlayerId());
            respCreateRolePacket.setResult("角色创建成功..");
            PacketUtil.sendPacket(session,respCreateRolePacket);
            logger.info("角色创建成功...");
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

        //角色登录成功则将session与Player添加进集合
        long playerId=reqRoleLoginPacket.getPlayerId();
        Player player=id2player.get(playerId);
        playerManager.addSession2Player(session,player);

        //发送角色登录成功响应包
        RespRoleLoginPacket respRoleLoginPacket=new RespRoleLoginPacket();
        respRoleLoginPacket.setPlayerId(playerId);
        respRoleLoginPacket.setResult("角色登录成功");
        logger.info("角色登录成功...");
        PacketUtil.sendPacket(session,respRoleLoginPacket);
    }

//    public void enterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){
//
//        int sceneId=reqEnterScenePacket.getSceneId();
//        //当客户端发送进入场景请求的时候，服务端接收到改请求后
//        //应该将对应场景的生物添加进集合
//        //此时要先从表中读取场景里面对应的生物
//        StaticResourceProvider staticResourceProvider=(StaticResourceProvider)monsterManager.getResourceProvider();
//        List<Monster> list=staticResourceProvider.getList();
//        //将Monster遍历进sceneManager
//        list.forEach((m)->{
//            mapManager.addObjectInScene(sceneId,m);
//        });
//
//        //根据场景id获取到场景里所有物体
//        Map<Long, Player> palyerInScene= mapManager.getPlayerInScene(sceneId);
//        Map<Long, MapObject> objectInMap= mapManager.getObjectInScene(sceneId);
//
//
//        //将player对象转为ObjectInfo放进响应包
//        List<ObjectInMapInfo> objects=new ArrayList<>();
//        palyerInScene.forEach((k,p)->{
//            objects.add(ObjectInMapInfo.valueOf(p));
//
//        });
//        //将MapObject转为ObjectInfo放进响应包
//        objectInMap.forEach((k,p)->{
//            objects.add(ObjectInMapInfo.valueOf(p));
//        });
//
//        //发送响应进入场景的包
//        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
//        respEnterScenePacket.setSceneId(sceneId);
//        //将场景里面所有的物体加载到响应包里面
//        respEnterScenePacket.setMapObject(objects);
//
//        //发送进入场景的包
//        PacketUtil.sendPacket(session,respEnterScenePacket);
//        logger.info("ScenenService处理了...");
//
//
//        //如果是第一个进入的话场景内应该时没有玩家的
//        //将自己添加到id到Player的Map集合中
//        Player player=playerManager.getPlayer2session().inverse().get(session);
//        RespBroadcastEnterWorldPacket respBroadcastEnterWorldPacket=new RespBroadcastEnterWorldPacket();
//        // respBroadcastEnterWorldPacket.setObjectInMapInfo(ObjectInMapInfo.valueOf(player));
//        respBroadcastEnterWorldPacket.setPlayerId(player.getPlayerEntity().getPlayerId());
//        respBroadcastEnterWorldPacket.setResult("成功进入场景");
//        //发送广播的包
//        PacketUtil.broatcastEnterWorldPacket(session,respBroadcastEnterWorldPacket,palyerInScene);
//        mapManager.getPlayerInScene(sceneId).put(player.getId(),player);
//        //此外此处应该还要发送通知给其他玩家，当前玩家进入场景了
//
//    }

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
}
