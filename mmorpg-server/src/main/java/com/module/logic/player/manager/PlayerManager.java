package com.module.logic.player.manager;

import com.common.identify.UniqueIdentifyKey;
import com.common.session.Session;
import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.dao.impl.PlayerDaoImpl;
import com.module.logic.player.type.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class PlayerManager {

    private BiMap<Player,Session> player2session= HashBiMap.create();
    private Map<String,Session> account2Session=new HashMap<>();

    @Autowired
    UniqueIdentifyKey uniqueIdentifyKey;

    public PlayerEntity createPlayerEntity(String account, String name, RoleType roleType,String sex){
        PlayerEntity playerEntity=new PlayerEntity();
        //通过雪花算法生成全局唯一的id
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

    //在登录的时候添加
    public void addSession2Player(Session session,Player player){
        //TODO 这里需要考虑一个问题就是判断玩家是否已经登录，如果已经登录则需要将之踢下线
        if(account2Session.size()>0){
            Session oldSession=account2Session.get(player.getPlayerEntity().getAccount());
            if(oldSession!=null){
                //将之踢下线
            }
        }
        //设置新的session
        account2Session.put(player.getPlayerEntity().getAccount(),session);
        player2session.put(player,session);
    }

    public BiMap<Player, Session> getPlayer2session() {
        return player2session;
    }

    public void setPlayer2session(BiMap<Player, Session> player2session) {
        this.player2session = player2session;
    }

    public Map<String, Session> getAccount2Session() {
        return account2Session;
    }

    public void setAccount2Session(Map<String, Session> account2Session) {
        this.account2Session = account2Session;
    }
}
