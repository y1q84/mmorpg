package com.common.event;

import com.module.logic.player.Player;
import org.springframework.context.ApplicationEvent;

public class PlayerEvent extends ApplicationEvent {
    public PlayerEvent(Player source) {
        super(source);
    }

}
