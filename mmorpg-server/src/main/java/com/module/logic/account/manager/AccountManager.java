package com.module.logic.account.manager;

import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.module.logic.account.entity.AccountEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class AccountManager {
    @Autowired
    private EntityProvider<AccountEntity,String> entityProvider;

    @PostConstruct
    public void init(){
        System.out.println("EntityProvider为空否？"+entityProvider);
//        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
//        AccountEntity accountEntity=new AccountEntity();
//        accountEntity.setAccount("222222");
//        accountEntity.setPassword("199999888");
//        List<Long> list=new ArrayList<>();
//        list.add(1001L);
//        list.add(1002L);
//        list.add(1005L);
//        list.add(1004L);
//        accountEntity.setIds(list);
//        cacheEntityProvider.save(accountEntity);
    }

    public boolean register(String account,String password){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        AccountEntity accountEntity=new AccountEntity();
        accountEntity.setAccount(account);
        accountEntity.setPassword(password);
        cacheEntityProvider.save(accountEntity);

        return false;
    }
}
