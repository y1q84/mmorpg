package com.module.logic.player.event;

import com.common.event.PlayerEvent;
import com.module.logic.player.Player;

public class PlayerLoginEvent extends PlayerEvent {

    public PlayerLoginEvent(Player source) {
        super(source);
    }
}
