package com.module.logic.player.manager.dao.impl;

import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.manager.dao.PlayerDao;
import org.springframework.stereotype.Component;

@Component
public class PlayerDaoImpl implements PlayerDao {


    @Override
    public PlayerEntity save(PlayerEntity playerEntity) {

        return playerEntity;
    }

    @Override
    public boolean update(PlayerEntity playerEntity) {
        return false;
    }

    @Override
    public PlayerEntity queryById(long playerId) {
        return null;
    }
}
