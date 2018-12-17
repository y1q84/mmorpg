package com.module.logic.goods.manager;

import com.alibaba.fastjson.JSON;
import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.common.persist.HibernateEntityProvider;
import com.module.logic.goods.entity.PlayerGoodsEntity;
import com.module.logic.goods.provider.PlayerGoods;
import com.module.logic.goods.provider.PlayerGoodsProvider;
import com.module.logic.player.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Component
public class PlayerGoodsManager {

    private Map<Long, PlayerGoodsProvider> id2provider=new HashMap<>();

    @Autowired
    private EntityProvider<PlayerGoodsEntity,Long> entityProvider;

    private static PlayerGoodsManager self;

    @PostConstruct
    public void init(){
        self=this;
    }

    public static PlayerGoodsManager getInstance(){
        return self;
    }

    public PlayerGoodsProvider getPlayerGoodsProvider(Player player){
        long playerId=player.getId();
        PlayerGoodsProvider playerGoodsProvider=id2provider.get(playerId);
        if(playerGoodsProvider==null){
            PlayerGoodsEntity playerGoodsEntity= (PlayerGoodsEntity) ((CacheEntityProvider)entityProvider).get(playerId);
            if(playerGoodsEntity==null){
                playerGoodsEntity=new PlayerGoodsEntity();
                playerGoodsEntity.setPlayerId(playerId);
                playerGoodsEntity.addPlayerGoods(new PlayerGoods());
            }
            playerGoodsEntity.init();
            playerGoodsProvider=new PlayerGoodsProvider(player,playerGoodsEntity);
            id2provider.put(playerId,playerGoodsProvider);
        }
        return playerGoodsProvider;
    }

    //更新到数据库
    public void addPlayerGoods(PlayerGoodsEntity playerGoodsEntity){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        cacheEntityProvider.add(playerGoodsEntity);
    }

//    public void addPlayerGoods(PlayerGoodsEntity playerGoodsEntity,PlayerGoods playerGoods){
//        playerGoodsEntity.addId2PlayerGoods(playerGoods);//先添加物品
//        String playerGoodsData= JSON.toJSONString(playerGoodsEntity.getId2PlayerGoods().values());//将最新的集合反序列化
//        playerGoodsEntity.setPlayerGoodsData(playerGoodsData);//设置对象最新值
//        //更新到数据库
//        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
//        cacheEntityProvider.update(playerGoodsEntity);
//    }
}
