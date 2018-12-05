package com.module.logic.player.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.module.logic.player.packet.*;
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

    @WsMethod
    public void roleLogin(Session session, ReqRoleLoginPacket reqRoleLoginPacket){
        playerService.roleLogin(session,reqRoleLoginPacket);
    }

    @WsMethod
    public void roleEnterScene(Session session, ReqEnterScenePacket reqEnterScenePacket){
        playerService.enterWorld(session,reqEnterScenePacket);
    }

    @WsMethod
    public void changeMapInstance(Session session, ReqChangeMapInstancePacket reqChangeMapInstancePacket){
        playerService.changeMapInstance(session,reqChangeMapInstancePacket);
    }

    @WsMethod
    public void attackMonster(Session session, ReqAttackMonsterPacket reqAttackMonsterPacket){
        playerService.attackMonster(session, reqAttackMonsterPacket);
    }
}
