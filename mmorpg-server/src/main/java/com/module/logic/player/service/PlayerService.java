package com.module.logic.player.service;

import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.PlayerManager;
import com.module.logic.player.packet.ReqCreateRolePacket;
import com.module.logic.player.packet.ReqRoleLoginPacket;
import com.module.logic.player.packet.RespCreateRolePacket;
import com.module.logic.player.packet.RespRoleLoginPacket;
import com.module.logic.player.type.RoleType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

/**
 * author:ydx
 * create 2018\10\21 0021
 */
@Service
public class PlayerService {

    Logger logger= LoggerFactory.getLogger(PlayerService.class);

    private Map<Long,Player> id2player=new HashMap<>();

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
        Player player=initPlayer(playerEntity);
        id2player.put(player.getId(),player);
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

    public Player initPlayer(PlayerEntity playerEntity){
        Player player=new Player();
        player.setId(playerEntity.getPlayerId());
        player.setPlayerEntity(playerEntity);
        playerEntity.setPlayer(player);
        // TODO 其他的初始化玩家的信息
        return player;
    }

    public void roleLogin(Session session, ReqRoleLoginPacket reqRoleLoginPacket){
        //角色登录逻辑

        //角色登录成功则将session与Player添加进集合
        long playerId=reqRoleLoginPacket.getPlayerId();
        Player player=id2player.get(playerId);
        playerManager.addSession2Player(session,player);

        //发送角色登录成功响应包
        RespRoleLoginPacket respRoleLoginPacket=new RespRoleLoginPacket();
        respRoleLoginPacket.setPlayerId(playerId);
        respRoleLoginPacket.setResult("角色登录成功");
        logger.info("角色登录成功...");
        PacketUtil.sendPacket(session,respRoleLoginPacket);
    }
}
