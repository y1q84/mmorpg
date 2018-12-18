package com.module.logic.goods.provider;

import com.module.logic.goods.entity.PlayerGoodsEntity;
import com.module.logic.goods.type.ContainerType;
import com.module.logic.player.Player;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

//用于存放背包，仓库，装备的类
public class PlayerGoodsProvider {

    private PlayerGoodsEntity playerGoodsEntity;

    //背包位置到物品的映射
    private Map<Integer,PlayerGoods> backpackPos2PlayerGoods=new HashMap<>();
    //仓库位置到物品的映射
    private Map<Integer,PlayerGoods> warehousePos2PlayerGoods=new HashMap<>();
    //装备位置到物品的映射
    private Map<Integer,PlayerGoods> equipment2PlayerGoods=new HashMap<>();

    //存放空格子的集合(位置不可重复)
    private Set<Integer> emptyBackpacPos=new HashSet<>();
    private Set<Integer> emptyWarehousePos=new HashSet<>();
    private Set<Integer> emptyEquipPos=new HashSet<>();

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
        if(ContainerType.Backpack.isInTheRange(playerGoods.getPosition())){
            backpackPos2PlayerGoods.put(playerGoods.getPosition(),playerGoods);
        }
        if(ContainerType.Warehouse.isInTheRange(playerGoods.getPosition())){
            warehousePos2PlayerGoods.put(playerGoods.getPosition(),playerGoods);
        }
        if(ContainerType.Equipment.isInTheRange(playerGoods.getPosition())){
            equipment2PlayerGoods.put(playerGoods.getPosition(),playerGoods);
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

    public Map<Integer, PlayerGoods> getEquipment2PlayerGoods() {
        return equipment2PlayerGoods;
    }

    public void setEquipment2PlayerGoods(Map<Integer, PlayerGoods> equipment2PlayerGoods) {
        this.equipment2PlayerGoods = equipment2PlayerGoods;
    }

    public void setPlayerGoodsEntity(PlayerGoodsEntity playerGoodsEntity) {
        this.playerGoodsEntity = playerGoodsEntity;
    }
}
