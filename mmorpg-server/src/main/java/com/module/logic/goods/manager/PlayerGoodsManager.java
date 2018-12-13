package com.module.logic.goods.manager;

import com.alibaba.fastjson.JSON;
import com.common.persist.CacheEntityProvider;
import com.common.persist.EntityProvider;
import com.module.logic.goods.entity.PlayerGoodsEntity;
import com.module.logic.goods.provider.PlayerGoods;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class PlayerGoodsManager {

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

    public void addPlayerGoods(PlayerGoodsEntity playerGoodsEntity){
        CacheEntityProvider cacheEntityProvider=(CacheEntityProvider)entityProvider;
        cacheEntityProvider.update(playerGoodsEntity);
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