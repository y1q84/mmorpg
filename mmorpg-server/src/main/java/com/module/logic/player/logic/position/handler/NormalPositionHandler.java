package com.module.logic.player.logic.position.handler;

import com.module.logic.player.Player;
import com.module.logic.player.entity.PlayerEntity;
import com.module.logic.player.logic.position.MapType;
import org.springframework.stereotype.Component;

/**
 * author:ydx
 * create 2018\12\4 0004
 */
@Component
public class NormalPositionHandler extends AbstractInitialPositionHandler {
    @Override
    public MapType getMapType() {
        return MapType.NORMAL_MAP;
    }

    @Override
    public void initialPostion(Player player) {
        PlayerEntity playerEntity=player.getPlayerEntity();
        player.setMapId(playerEntity.getMapId());
    }
}
