package com.module.logic.account.manager;

import com.common.persist.EntityProvider;
import com.module.logic.account.entity.AccountEntity;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

import static org.junit.Assert.*;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:applicationContext.xml"})
public class AccountManagerTest {

    @Autowired
    EntityProvider<AccountEntity,String> entityProvider;

    @Test
    public void queryAccountEntity(){
        List<AccountEntity> list=entityProvider.query("findAccountEntityByAccount","222222");
        for(AccountEntity ac:list){
            System.out.println("账号id为："+ac.getId()+"\t密码为："+ac.getPassword());
        }
    }
}