package com.module.logic.account.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.packetId.PacketId;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.account.packet.ReqLoginPacket;
import com.module.logic.account.packet.ReqRegisterPacket;
import com.module.logic.account.packet.ResLoginPacket;
import com.module.logic.account.packet.RespRegisterPacket;
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
        //此处应该要处理多个登录请求
        //如果已经登录了，则session里面账号不为空
        String oldAccount=session.getAccount(Constants.SESSION_ID);
        if(oldAccount!=null){
            //如果玩家已经登录了，则不做任何处理
            return;
        }
        String account=reqLoginPacket.getAccount();
        String password=reqLoginPacket.getPassword();
        boolean stateCode= accountService.login(account,password);
        ResLoginPacket resLoginPacket = new ResLoginPacket();
        if(stateCode){
            //登录成功，将account添加进session
            //因为创建角色实体的时候每一个角色实体都有对应的账号
            addAccountToSession(session,reqLoginPacket);
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
