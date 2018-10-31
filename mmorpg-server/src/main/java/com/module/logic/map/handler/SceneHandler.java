package com.module.logic.map.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.module.logic.map.packet.ReqEnterScenePacket;
import com.module.logic.map.service.SceneService;
import org.springframework.beans.factory.annotation.Autowired;

@WsClass
public class SceneHandler {

    @Autowired
    SceneService sceneService;

    @WsMethod
    public void enterWorld(Session session, ReqEnterScenePacket reqEnterScenePacket){
        sceneService.enterScene(session,reqEnterScenePacket);
    }
}
