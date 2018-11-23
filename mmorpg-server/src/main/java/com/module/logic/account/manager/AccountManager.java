package com.module.logic.account.manager;

import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.module.logic.account.entity.AccountEntity;
import org.checkerframework.checker.units.qual.A;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class AccountManager {
    @Autowired
    private EntityProvider<AccountEntity,String> entityProvider;
    private static AccountManager self;

    @PostConstruct
    public void init(){
        self=this;
        System.out.println("EntityProvider为空否？"+entityProvider);
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
//        尝试查询数据
//        List<AccountEntity> list=cacheEntityProvider.query("findAccountEntityByAccount","222222");
//        for(AccountEntity ac:list){
//            System.out.println("账号id为："+ac.getId()+"\t密码为："+ac.getPassword());
//        }
//        尝试插入数据
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

    public static AccountManager getInstance(){
        return self;
    }

    public boolean register(String account,String password){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        AccountEntity accountEntity=new AccountEntity();
        accountEntity.setAccount(account);
        accountEntity.setPassword(password);
        List<AccountEntity> list=cacheEntityProvider.query("findAccountEntityByAccount",account);
        //判断该账号是否已经存在
        if(list.size()==0){
            cacheEntityProvider.save(accountEntity);
            return true;
        }
        return false;
    }

    public boolean login(String account,String passsword){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        List<AccountEntity> list=cacheEntityProvider.query("findAccountEntityByAccountAndPass",account,passsword);
        if(list.size()>0){
            return true;
        }
        return false;
    }

    public List<AccountEntity> findAccountEntity(String account,String sql){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        List<AccountEntity> list=cacheEntityProvider.query(sql,account);
        return list;
    }
}
