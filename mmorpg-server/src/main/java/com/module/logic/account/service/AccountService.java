package com.module.logic.account.service;

import com.module.logic.account.manager.AccountManager;
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

    public boolean login(String account,String password){
        boolean result=accountManager.login(account,password);
        return result;
    }

    public boolean register(String account,String password){
        return accountManager.register(account,password);
    }
}
