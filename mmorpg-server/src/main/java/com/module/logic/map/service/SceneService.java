package com.module.logic.map.service;

import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.packet.RespEnterScenePacket;
import com.module.logic.map.packet.vo.PlayerInfo;
import com.module.logic.player.manager.dao.impl.PlayerDaoImpl;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class SceneService {
    Logger logger= LoggerFactory.getLogger(SceneService.class);

    @Autowired
    PlayerDaoImpl playerDaoImpl;

    public void enterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){

        //发送响应进入场景的包
        RespEnterScenePacket respEnterScenePacket=new RespEnterScenePacket();
        int mapId=reqEnterScenePacket.getMapId();
        int sceneId=reqEnterScenePacket.getSceneId();
        respEnterScenePacket.setMapId(mapId);
        respEnterScenePacket.setSceneId(sceneId);
        respEnterScenePacket.addMapObject(getObjectInMap());

        //发包
        PacketUtil.sendPacket(session,respEnterScenePacket);
        logger.info("ScenenService处理了...");

    }

    public List<PlayerInfo> getObjectInMap(){
        List<PlayerInfo> playerInfos=new ArrayList<>();
        PlayerInfo playerInfo1=new PlayerInfo();
        playerInfo1.setPlayerId(1001);
        playerInfo1.setPlayerName("彰化");
        playerInfo1.setRole("战士");
        playerInfos.add(playerInfo1);

        PlayerInfo playerInfo2=new PlayerInfo();
        playerInfo2.setPlayerId(1002);
        playerInfo2.setPlayerName("城隍澄空");
        playerInfo2.setRole("道士");
        playerInfos.add(playerInfo2);

        PlayerInfo playerInfo3=new PlayerInfo();
        playerInfo3.setPlayerId(10013);
        playerInfo3.setPlayerName("孙悟空");
        playerInfo3.setRole("法师");
        playerInfos.add(playerInfo3);
        return playerInfos;
    }
}
