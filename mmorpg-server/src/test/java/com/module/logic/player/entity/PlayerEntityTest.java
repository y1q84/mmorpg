package com.module.logic.player.entity;

import com.common.identify.SnowflakeGeneratorStrategy;
import com.common.persist.HibernateEntityProvider;
import com.module.logic.player.type.RoleType;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = {"classpath*:applicationContext.xml"})
public class PlayerEntityTest {
    @Autowired
    HibernateEntityProvider<PlayerEntity,Long> hibernateEntityProvider;

    @Test
    public void test(){
        PlayerEntity playerEntity=new PlayerEntity();
        playerEntity.setPlayerId(SnowflakeGeneratorStrategy.getInstance().createUniqueId());
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