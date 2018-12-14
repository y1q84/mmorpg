package com.module.logic.player;

import com.common.session.Session;
import com.module.logic.goods.provider.PlayerGoodsProvider;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.logic.position.InitialPosition;
import com.module.logic.player.type.RoleType;

public class Player extends CreatureObject {

    private Session session;
    private PlayerEntity playerEntity;
    //保存玩家登录时的位置信息
    private InitialPosition initialPosition;
    private PlayerGoodsProvider playerGoodsProvider;//玩家背包产生器

    public Player(){}

    public Session getSession() {
        return session;
    }

    public void setSession(Session session) {
        this.session = session;
    }

    public PlayerEntity getPlayerEntity() {
        return playerEntity;
    }

    public void setPlayerEntity(PlayerEntity playerEntity) {
        this.playerEntity = playerEntity;
    }

    public RoleType getRoleType(){
        return playerEntity.getRoleType();
    }

    public InitialPosition getInitialPosition() {
        return initialPosition;
    }

    public void setInitialPosition(InitialPosition initialPosition) {
        this.initialPosition = initialPosition;
    }

    public PlayerGoodsProvider getPlayerGoodsProvider() {
        return playerGoodsProvider;
    }

    public void setPlayerGoodsProvider(PlayerGoodsProvider playerGoodsProvider) {
        this.playerGoodsProvider = playerGoodsProvider;
    }
}
