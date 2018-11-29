package com.module.logic.account.service;

import com.common.session.Session;
import com.module.logic.account.manager.AccountManager;
import com.module.logic.account.packet.ReqLoginPacket;
import com.module.logic.player.manager.PlayerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * author:ydx
 * create 2018\10\30 0030
 */
@Component
public class AccountService {

    @Autowired
    AccountManager accountManager;
    @Autowired
    PlayerManager playerManager;

    public boolean login(Session session, ReqLoginPacket reqLoginPacket){
        String account=reqLoginPacket.getAccount();
        String password=reqLoginPacket.getPassword();
        boolean result=accountManager.login(account,password);
        if(result){
            //登录成功时，添加连接断开的监听
            session.getSessionCloseEvents().add(()->playerManager.dealWithChannelClose(session));
        }
        return result;
    }

    public boolean register(String account,String password){
        return accountManager.register(account,password);
    }
}
