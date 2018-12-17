package com.module.logic.goods.service;

import com.module.logic.goods.manager.PlayerGoodsManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlayerGoodsService {

    @Autowired
    private PlayerGoodsManager playerGoodsManager;


}
