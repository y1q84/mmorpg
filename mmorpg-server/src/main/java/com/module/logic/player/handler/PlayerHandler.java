package com.module.logic.player.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.module.logic.login.packet.ReqLoginPacket;
import com.module.logic.login.packet.ResLoginPacket;
import com.module.logic.player.service.PlayerService;
import io.netty.channel.Channel;
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
    public void playerLogin(Channel channel, ReqLoginPacket reqLoginPacket){
        String userName=reqLoginPacket.getUserName();
        String password=reqLoginPacket.getPassword();
        boolean stateCode=playerService.playerLogin(userName,password);
        if(stateCode){

            //channel.writeAndFlush(new TextWebSocketFrame("登录成功！"));
            ResLoginPacket resLoginPacket = new ResLoginPacket();
            resLoginPacket.setResult("xxxxx");
            channel.writeAndFlush(resLoginPacket);
            logger.info("登录成功！");
        }

    }
}
