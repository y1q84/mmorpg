package com.module.logic.player.vo.user;

import com.common.identify.UniqueIdentifyKey;
import com.common.persist.HibernateEntityProvider;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.type.RoleType;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class PlayerEntityTest {
    public static void main(String args[]){
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        HibernateEntityProvider<PlayerEntity,Long> hibernateEntityProvider=ac.getBean(HibernateEntityProvider.class);
        PlayerEntity playerEntity=new PlayerEntity();
        playerEntity.setPlayerId(UniqueIdentifyKey.getInstance().createUniqueId());
        playerEntity.setLevel(1);
        playerEntity.setHp(1000);
        playerEntity.setExp(5000);
        playerEntity.setGold(100);
        playerEntity.setPlayerName("张无忌");
        playerEntity.setSex("男");
        playerEntity.setRoleType(RoleType.MASTER);
        hibernateEntityProvider.save(playerEntity);
    }

}