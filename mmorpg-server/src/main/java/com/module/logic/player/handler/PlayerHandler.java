package com.module.logic.player.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.login.packet.ReqLoginPacket;
import com.module.logic.login.packet.ResLoginPacket;
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
    public void playerLogin(Session session, ReqLoginPacket reqLoginPacket){
        String userName=reqLoginPacket.getUserName();
        String password=reqLoginPacket.getPassword();
        boolean stateCode=playerService.playerLogin(userName,password);
        if(stateCode){
            ResLoginPacket resLoginPacket = new ResLoginPacket();
            resLoginPacket.setResult("恭喜你，登录成功啦...");
            //session.getChannel().writeAndFlush(resLoginPacket);
            PacketUtil.sendPacket(session,resLoginPacket);
            logger.info("登录成功！");
        }

    }
}
