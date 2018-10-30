package com.module.logic.player.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.module.logic.player.packet.ReqCreateRolePacket;
import com.module.logic.player.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * author:ydx
 * create 2018\10\21 0021
 */

@WsClass
public class PlayerHandler {

    Logger logger=LoggerFactory.getLogger(PlayerHandler.class);

    @Autowired
    PlayerService playerService;

    @WsMethod
    public void createRole(Session session, ReqCreateRolePacket reqCreateRolePacket){
        playerService.createRole(session,reqCreateRolePacket);
    }

}
