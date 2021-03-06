package com.module.logic.account.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.packetId.PacketId;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.account.manager.AccountManager;
import com.module.logic.account.packet.ReqLoginPacket;
import com.module.logic.account.packet.ReqRegisterPacket;
import com.module.logic.account.packet.ResLoginPacket;
import com.module.logic.account.packet.RespRegisterPacket;
import com.module.logic.account.packet.vo.PlayerEntityInfo;
import com.module.logic.account.service.AccountService;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.service.PlayerService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.ArrayList;
import java.util.List;

/**
 * author:ydx
 * create 2018\10\29 0029
 */
@WsClass
public class AccountHandler {

    Logger logger= LoggerFactory.getLogger(AccountHandler.class);

    @Autowired
    AccountService accountService;
    @Autowired
    PlayerService playerService;

    @WsMethod
    public void accountLogin(Session session, ReqLoginPacket reqLoginPacket){
        //此处应该要处理多个登录请求
        //同一浏览器的不同窗口，其连接的channel不同，故所得session不同，因而此判断不起作用
//        String oldAccount=session.getAccount(Constants.SESSION_ID);
//        if(oldAccount!=null){
//            //如果玩家已经登录了，则不做任何处理
//            return ;
//        }
        boolean stateCode= accountService.login(session,reqLoginPacket);
        ResLoginPacket resLoginPacket = new ResLoginPacket();
        if(stateCode){
            //登录成功，将account添加进session
            //因为创建角色实体的时候每一个角色实体都有对应的账号
            addAccountToSession(session,reqLoginPacket);

            //同时应该向客户端发送该账号已有角色列表
            List<PlayerEntity> playerEntities= AccountManager.getInstance().getCreatedRole(reqLoginPacket.getAccount());
            List<PlayerEntityInfo> playerEntityInfos=new ArrayList<>();
            if(playerEntities!=null){
                playerEntities.forEach((e)->{
                    playerEntityInfos.add(PlayerEntityInfo.valueOf(e));
                    //同时应该初始化playerService中id到player的映射
                    playerService.addId2Player(e.getPlayerId(),playerService.initPlayer(e));
                });
            }
            resLoginPacket.setPlayerEntityInfos(playerEntityInfos);
            resLoginPacket.setResult("登录成功");
            logger.info("登录成功！");

        }else{
            resLoginPacket.setResult("登录失败");
            logger.info("登录失败！");
        }
        PacketUtil.sendPacket(session,resLoginPacket);
    }

    @WsMethod
    public void accountRegister(Session session, ReqRegisterPacket reqRegisterPacket){
        String account=reqRegisterPacket.getAccount();
        String password=reqRegisterPacket.getPassword();
        boolean result=accountService.register(account,password);
        RespRegisterPacket respRegisterPacket=new RespRegisterPacket();
        if(result){
            respRegisterPacket.setResult("注册成功");
        }else{
            respRegisterPacket.setResult("注册失败");
        }
        PacketUtil.sendPacket(session,respRegisterPacket);

    }

    public void addAccountToSession(Session session,ReqLoginPacket reqLoginPacket){
        session.add(Constants.SESSION_ID,reqLoginPacket.getAccount());
    }
}
