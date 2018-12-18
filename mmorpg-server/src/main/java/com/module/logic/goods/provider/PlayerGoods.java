package com.module.logic.goods.provider;

import com.module.logic.goods.entity.PlayerGoodsEntity;
import com.module.logic.goods.manager.PlayerGoodsManager;
import com.module.logic.player.Player;

public class PlayerGoods {

    private String goodsId;
    // 物品在每个格子的叠加数
    private int number;
    // 物品所在格子位置
    private int position;
    private long playerId;

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public int getPosition() {
        return position;
    }

    public void setPosition(int position) {
        this.position = position;
    }

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }
    public PlayerGoodsEntity getPlayerGoodsEntity(Player player) {
        PlayerGoodsProvider playerGoodsProvider=PlayerGoodsManager.getInstance().getPlayerGoodsProvider(player);
        return playerGoodsProvider.getPlayerGoodsEntity();
    }

}
