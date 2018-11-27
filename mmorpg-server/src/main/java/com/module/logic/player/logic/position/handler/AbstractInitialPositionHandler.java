package com.module.logic.player.logic.position.handler;

import com.module.logic.player.Player;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.manager.PlayerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public abstract class AbstractInitialPositionHandler {

    @Autowired
    private PlayerManager playerManager;
    @PostConstruct
    public void init(){
        playerManager.registerPostionHandler(this);
    }
    public abstract MapType getMapType();
    /**
     * 登录初始化场景
     */
    public abstract void initialPostion(Player player);
}
