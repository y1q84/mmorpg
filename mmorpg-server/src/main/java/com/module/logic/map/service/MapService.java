package com.module.logic.map.service;

import com.module.logic.player.manager.PlayerManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class MapService {
    Logger logger= LoggerFactory.getLogger(MapService.class);

    @Autowired
    PlayerManager playerManager;

    public void enter(){


    }

}
