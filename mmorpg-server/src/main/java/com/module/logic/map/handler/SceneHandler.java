package com.module.logic.map.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.service.SceneService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

@WsClass
public class SceneHandler {
    Logger logger= LoggerFactory.getLogger(SceneHandler.class);

    @Autowired
    SceneService sceneService;

    @WsMethod
    public void enterWorld(Session session, ReqEnterScenePacket reqEnterScenePacket){
        logger.info("SceneHandler处理了...");
        sceneService.enterScene(session,reqEnterScenePacket);
    }
}
