package com.module.logic.account.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.account.packet.ReqLoginPacket;
import com.module.logic.account.packet.ResLoginPacket;
import com.module.logic.account.service.AccountService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

/**
 * author:ydx
 * create 2018\10\29 0029
 */
@WsClass
public class AccountHandler {

    Logger logger= LoggerFactory.getLogger(AccountHandler.class);

    @Autowired
    AccountService accountService;

    @WsMethod
    public void accountLogin(Session session, ReqLoginPacket reqLoginPacket){
        String account=reqLoginPacket.getAccount();
        String password=reqLoginPacket.getPassword();
        boolean stateCode= accountService.login(account,password);
        if(stateCode){
            //登录成功，将account添加进session
            addAccountToSession(session,reqLoginPacket);
            ResLoginPacket resLoginPacket = new ResLoginPacket();
            resLoginPacket.setResult("登录成功");
            PacketUtil.sendPacket(session,resLoginPacket);
            logger.info("登录成功！");
        }
    }

    public void addAccountToSession(Session session,ReqLoginPacket reqLoginPacket){
        session.add(Constants.SESSION_ID,reqLoginPacket.getAccount());
    }
}
