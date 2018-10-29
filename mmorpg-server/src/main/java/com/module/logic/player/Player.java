package com.module.logic.player;

import com.common.session.Session;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.player.entity.PlayerEntity;

public class Player extends CreatureObject {

    private Session session;
    private PlayerEntity playerEntity;

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
}
