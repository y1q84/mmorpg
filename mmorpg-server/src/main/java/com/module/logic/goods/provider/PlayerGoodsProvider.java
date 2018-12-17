package com.module.logic.goods.provider;

import com.module.logic.goods.entity.PlayerGoodsEntity;
import com.module.logic.goods.type.GoodsType;
import com.module.logic.player.Player;

import java.util.HashMap;
import java.util.Map;

//用于存放背包，仓库，装备的类
public class PlayerGoodsProvider {

    private PlayerGoodsEntity playerGoodsEntity;

    //背包位置到物品的映射
    private Map<Integer,PlayerGoods> backpackPos2PlayerGoods=new HashMap<>();
    //仓库位置到物品的映射
    private Map<Integer,PlayerGoods> warehousePos2PlayerGoods=new HashMap<>();

    public PlayerGoodsProvider(){}

    public PlayerGoodsProvider(Player player,PlayerGoodsEntity playerGoodsEntity){
        this.playerGoodsEntity=playerGoodsEntity;
        initPlayerGoods(player,playerGoodsEntity);
    }

    //初始化玩家道具信息
    public void initPlayerGoods(Player player, PlayerGoodsEntity playerGoodsEntity){
        Map<String,PlayerGoods> id2PlayerGoods=playerGoodsEntity.getId2PlayerGoods();
        id2PlayerGoods.forEach((K,v)->{
            initBackpack(player,v);
        });
    }


    //初始化背包|仓库的内容
    public void initBackpack(Player player, PlayerGoods playerGoods){
        if(GoodsType.Backpack.isInTheRange(playerGoods.getPosition())){
            backpackPos2PlayerGoods.put(playerGoods.getPosition(),playerGoods);
        }
        if(GoodsType.Warehouse.isInTheRange(playerGoods.getPosition())){
            warehousePos2PlayerGoods.put(playerGoods.getPosition(),playerGoods);
        }
    }

    public Map<Integer, PlayerGoods> getBackpackPos2PlayerGoods() {
        return backpackPos2PlayerGoods;
    }
    public Map<Integer, PlayerGoods> getWarehousePos2PlayerGoods() {
        return warehousePos2PlayerGoods;
    }
    public void addPlayerGoodsToBackpack(int position,PlayerGoods playerGoods) {
        this.backpackPos2PlayerGoods.put(position,playerGoods);
    }
    public void addPlayerGoodsToWarehouse(int position, PlayerGoods playerGoods) {
        this.warehousePos2PlayerGoods.put(position,playerGoods);
    }

    public PlayerGoodsEntity getPlayerGoodsEntity() {
        return playerGoodsEntity;
    }

    public void setPlayerGoodsEntity(PlayerGoodsEntity playerGoodsEntity) {
        this.playerGoodsEntity = playerGoodsEntity;
    }
}
