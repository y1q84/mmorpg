package com.module.logic.goods.provider;

import java.util.HashMap;
import java.util.Map;

//用于存放背包，仓库，装备的类
public class PlayerGoodsProvider {

    //背包位置到物品的映射
    private Map<Integer,PlayerGoods> backpackPos2PlayerGoods=new HashMap<>();
    //仓库位置到物品的映射
    private Map<Integer,PlayerGoods> warehousePos2PlayerGoods=new HashMap<>();



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
}
