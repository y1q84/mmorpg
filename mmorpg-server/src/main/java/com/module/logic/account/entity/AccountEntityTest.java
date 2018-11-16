package com.module.logic.account.entity;

import com.common.persist.HibernateEntityProvider;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.ArrayList;
import java.util.List;

public class AccountEntityTest {

    public static void main(String[] args) {
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        HibernateEntityProvider<AccountEntity,String> hibernateEntityProvider=ac.getBean(HibernateEntityProvider.class);
        AccountEntity accountEntity=new AccountEntity();
        accountEntity.setId("12345678");
        accountEntity.setAccount("111111");
        accountEntity.setPassword("199999888");
        List<Long> list=new ArrayList<>();
        list.add(1001L);
        list.add(1002L);
        accountEntity.setIds(list);
        hibernateEntityProvider.save(accountEntity);
    }
}
