package com.module.logic.goods.entity;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.TypeReference;
import com.common.persist.IEntity;
import com.common.resource.annotation.Id;
import com.module.logic.goods.manager.PlayerGoodsManager;
import com.module.logic.goods.provider.PlayerGoods;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Transient;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Entity
public class PlayerGoodsEntity implements IEntity<Long> {

    @Id
    @Column
    private long playerId;
    @Column
    private String playerGoodsData;

    @Transient
    private Map<String, PlayerGoods> id2PlayerGoods;//物品id到物品的映射

    public void init(){//初始化物品集合
        id2PlayerGoods=new HashMap<>();
        if(StringUtils.isNotBlank(playerGoodsData)){
            try{
                List<PlayerGoods> list = JSON.parseObject(playerGoodsData,new TypeReference<List<PlayerGoods>>(){});
                list.forEach((k)->{
                    id2PlayerGoods.put(k.getGoodsId(),k);
                });
            }catch (Exception e){
                e.printStackTrace();
            }
        }
    }

    //添加物品
    public void addPlayerGoods(PlayerGoods playerGoods){
        id2PlayerGoods.put(playerGoods.getGoodsId(),playerGoods);
        playerGoodsData=JSON.toJSONString(id2PlayerGoods.values());
        //更新到数据库
        PlayerGoodsManager.getInstance().addPlayerGoods(this);
    }


    @Override
    public Long getId() {
        return playerId;
    }

    @Override
    public void setId(Long aLong) {
        this.playerId=aLong;
    }

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getPlayerGoodsData() {
        return playerGoodsData;
    }

    public void setPlayerGoodsData(String playerGoodsData) {
        this.playerGoodsData = playerGoodsData;
    }

    public Map<String, PlayerGoods> getId2PlayerGoods() {
        return id2PlayerGoods;
    }

    public void setId2PlayerGoods(Map<String, PlayerGoods> id2PlayerGoods) {
        this.id2PlayerGoods = id2PlayerGoods;
    }

    public void addId2PlayerGoods(PlayerGoods playerGoods){
        id2PlayerGoods.put(playerGoods.getGoodsId(),playerGoods);
    }
}
