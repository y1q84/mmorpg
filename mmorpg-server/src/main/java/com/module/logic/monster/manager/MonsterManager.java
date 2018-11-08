package com.module.logic.monster.manager;

import com.common.resource.provider.ResourceProvider;
import com.common.resource.provider.StaticResourceProvider;
import com.common.resource.provider.StaticResourceProviderManager;
import com.module.logic.monster.resource.Monster;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.List;

@Component
public class MonsterManager {

    @Autowired
    private ResourceProvider<Monster> resourceProvider;

    @PostConstruct
    public void init(){
        System.out.println("staticResourceProvider为空否？"+resourceProvider);
    }

    public static void main(String[] args) {

        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        StaticResourceProviderManager bean = ac.getBean(StaticResourceProviderManager.class);
        MonsterManager monsterManager=ac.getBean(MonsterManager.class);
        StaticResourceProvider staticResourceProvider=(StaticResourceProvider)monsterManager.resourceProvider;
        List<Monster> list=staticResourceProvider.getList();
        for(int i=0;i<list.size();i++){
            System.out.println(list.get(i));
        }
    }
}
