package com.module.logic.map.service;

import com.common.resource.provider.StaticResourceProvider;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.manager.SceneManager;
import com.module.logic.map.obj.MapObject;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.packet.RespEnterScenePacket;
import com.module.logic.map.packet.vo.ObjectInMapInfo;
import com.module.logic.monster.manager.MonsterManager;
import com.module.logic.monster.resource.Monster;
import com.module.logic.player.Player;
import com.module.logic.player.manager.PlayerManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class SceneService {
    Logger logger= LoggerFactory.getLogger(SceneService.class);

    @Autowired
    SceneManager sceneManager;

    @Autowired
    PlayerManager playerManager;

    @Autowired
    MonsterManager monsterManager;


    public void enter(){


    }

    public void enterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){

        int sceneId=reqEnterScenePacket.getSceneId();
        //当客户端发送进入场景请求的时候，服务端接收到改请求后
        //应该将对应场景的生物添加进集合
        //此时要先从表中读取场景里面对应的生物
        StaticResourceProvider staticResourceProvider=(StaticResourceProvider)monsterManager.getResourceProvider();
        List<Monster>list=staticResourceProvider.getList();
        //将Monster遍历进sceneManager
        list.forEach((m)->{
            sceneManager.addObjectInScene(sceneId,m);
        });

        //根据场景id获取到场景里所有物体
        Map<Long, Player> palyerInScene=sceneManager.getPlayerInScene(sceneId);
        Map<Long, MapObject> objectInMap=sceneManager.getObjectInScene(sceneId);


        //将player对象转为ObjectInfo放进响应包
        List<ObjectInMapInfo> objects=new ArrayList<>();
        palyerInScene.forEach((k,p)->{
            objects.add(ObjectInMapInfo.valueOf(p));

        });
        //将MapObject转为ObjectInfo放进响应包
        objectInMap.forEach((k,p)->{
            objects.add(ObjectInMapInfo.valueOf(p));
        });

        //发送响应进入场景的包
        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
        respEnterScenePacket.setSceneId(sceneId);
        //将场景里面所有的物体加载到响应包里面
        respEnterScenePacket.setMapObject(objects);

        //发包
        PacketUtil.sendPacket(session,respEnterScenePacket);
        logger.info("ScenenService处理了...");


        //如果是第一个进入的话场景内应该时没有玩家的
        //将自己添加到id到Player的Map集合中
        Player player=playerManager.getPlayer2session().inverse().get(session);
        sceneManager.getPlayerInScene(sceneId).put(player.getId(),player);
        //此外此处应该还要发送通知给其他玩家，当前玩家进入场景了

    }

}
