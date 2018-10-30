package com.module.logic.player.manager.dao;

import com.module.logic.player.entity.PlayerEntity;

public interface PlayerDao {

    PlayerEntity save(PlayerEntity playerEntity);
    boolean update(PlayerEntity playerEntity);
    PlayerEntity queryById(long playerId);
}
