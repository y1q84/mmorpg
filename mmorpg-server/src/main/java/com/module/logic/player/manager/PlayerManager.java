package com.module.logic.player.manager;

import com.common.identify.UniqueIdentifyKey;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.dao.impl.PlayerDaoImpl;
import com.module.logic.player.type.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlayerManager {

    @Autowired
    UniqueIdentifyKey uniqueIdentifyKey;

    public PlayerEntity createPlayerEntity(String account, String name, RoleType roleType,String sex){
        PlayerEntity playerEntity=new PlayerEntity();
        int playerId=(int)uniqueIdentifyKey.createUniqueId();
        playerEntity.setPlayerId(playerId);
        System.out.println("生成的playerId为："+playerId);
        playerEntity.setAccount(account);
        playerEntity.setPlayerName(name);
        playerEntity.setRoleType(roleType);
        playerEntity.setSex(sex);
        playerEntity.setMapId(1001);
        //保存到数据库
        PlayerEntity playerEntity1=new PlayerDaoImpl().save(playerEntity);
        return playerEntity1;
    }
}
