package com.module.logic.map.service;

import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.Scene;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.packet.RespEnterScenePacket;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.dao.impl.PlayerDaoImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SceneService {

    @Autowired
    PlayerDaoImpl playerDaoImpl;

    public void enterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){
        int mapId=reqEnterScenePacket.getMapId();
        int sceneId=reqEnterScenePacket.getSceneId();
        //根据scenenId获取到scene对象
        Scene scene=getScenenById(sceneId);
        PlayerEntity entity=playerDaoImpl.queryById(session.getId());
        Player player=new Player();
        player.setPlayerEntity(entity);
        scene.addObjectToMap(session.getId(),player);

        //发送响应进入场景的包
        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
        respEnterScenePacket.setMapId(mapId);
        respEnterScenePacket.setSceneId(sceneId);
        respEnterScenePacket.setMapObjectMap(scene.getObjectInMap());
        PacketUtil.sendPacket(session,respEnterScenePacket);

    }

    public Scene getScenenById(int id){
        Scene scene=new Scene();
        Player player=new Player();
        PlayerEntity entity=new PlayerEntity();
        entity.setPlayerName("zhangsan");
        entity.setSex("男");
        entity.setMapId(1);
        player.setPlayerEntity(entity);
        scene.addObjectToMap(1111,player);
        return scene;
    }
}
