package com.module.logic.map.service;

import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.manager.SceneManager;
import com.module.logic.map.obj.MapObject;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.packet.RespEnterScenePacket;
import com.module.logic.map.packet.vo.ObjectInMapInfo;
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


    public void enter(){


    }

    public void enterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){

        int sceneId=reqEnterScenePacket.getSceneId();
        //根据场景id获取到场景里所有物体
        Map<Long, Player> palyerInScene=sceneManager.getPlayerInScene(sceneId);
        Map<Long, MapObject> objectInMap=sceneManager.getObjectInScene(sceneId);


        //将player对象转为ObjectInfo放进响应包
        List<ObjectInMapInfo> objects=new ArrayList<>();
        palyerInScene.forEach((k,p)->{
            objects.add(ObjectInMapInfo.valueOf(p));

        });
        //将MapObject转为ObjectInfo放进响应包


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

//    public List<ObjectInMapInfo> getObjectInMap(){
//        List<ObjectInMapInfo> playerInfos=new ArrayList<>();
//        ObjectInMapInfo playerInfo1=new ObjectInMapInfo();
//        playerInfo1.setPlayerId(1001);
//        playerInfo1.setPlayerName("彰化");
//        playerInfo1.setRole("战士");
//        playerInfos.add(playerInfo1);
//
//        ObjectInMapInfo playerInfo2=new ObjectInMapInfo();
//        playerInfo2.setPlayerId(1002);
//        playerInfo2.setPlayerName("城隍澄空");
//        playerInfo2.setRole("道士");
//        playerInfos.add(playerInfo2);
//
//        ObjectInMapInfo playerInfo3=new ObjectInMapInfo();
//        playerInfo3.setPlayerId(10013);
//        playerInfo3.setPlayerName("孙悟空");
//        playerInfo3.setRole("法师");
//        playerInfos.add(playerInfo3);
//        return playerInfos;
//    }
}
