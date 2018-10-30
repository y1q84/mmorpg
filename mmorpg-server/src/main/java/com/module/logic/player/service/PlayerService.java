package com.module.logic.player.service;

import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.ReqCreateRolePacket;
import com.module.logic.player.packet.RespCreateRolePacket;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Service
public class PlayerService {

    Logger logger= LoggerFactory.getLogger(PlayerService.class);

    @Autowired
    PlayerManager playerManager;

    public void createRole(Session session, ReqCreateRolePacket reqCreateRolePacket){

        String name=reqCreateRolePacket.getPlayerName();
        logger.info("角色名："+name);
        RoleType roleType=reqCreateRolePacket.getRoleType();
        logger.info("角色类型为："+roleType.name());
        String sex=reqCreateRolePacket.getSex();
        logger.info("性别:"+sex);
        PlayerEntity playerEntity=playerManager.createPlayerEntity(session.getAccount(Constants.SESSION_ID),name,roleType,sex);
        if(playerEntity!=null){
            //添加到数据库成功
            //返回信息
            RespCreateRolePacket respCreateRolePacket=new RespCreateRolePacket();
            respCreateRolePacket.setPlayerId(playerEntity.getPlayerId());
            respCreateRolePacket.setResult("角色创建成功..");
            PacketUtil.sendPacket(session,respCreateRolePacket);
            logger.info("角色创建成功...");
        }
    }
}
