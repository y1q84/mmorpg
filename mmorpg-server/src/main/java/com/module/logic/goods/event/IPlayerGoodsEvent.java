package com.module.logic.goods.event;

import com.module.logic.player.Player;

public interface IPlayerGoodsEvent {

    void onCreateRole(Player player);
    void onRoleLogin(Player player);
}
