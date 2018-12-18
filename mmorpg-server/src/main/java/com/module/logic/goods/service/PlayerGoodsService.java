package com.module.logic.goods.service;

import com.common.session.Session;
import com.module.logic.goods.manager.PlayerGoodsManager;
import com.module.logic.goods.packet.ReqAddPlayerGoodsPacket;
import com.module.logic.goods.provider.PlayerGoods;
import com.module.logic.goods.provider.PlayerGoodsProvider;
import com.module.logic.goods.resource.PlayerGoodsResource;
import com.module.logic.player.Player;
import com.module.logic.player.manager.PlayerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class PlayerGoodsService {

    @Autowired
    private PlayerGoodsManager playerGoodsManager;

    public void addPlayerGoods(Session session, ReqAddPlayerGoodsPacket reqAddPlayerGoodsPacket){
        Player player=PlayerManager.getInstance().getPlayer2session().inverse().get(session);
        long goodsId=reqAddPlayerGoodsPacket.getPlayerGoodsId();
        PlayerGoodsProvider playerGoodsProvider=PlayerGoodsManager.getInstance().getPlayerGoodsProvider(player);
        PlayerGoods playerGoods=getPlayerGoodsById(goodsId);
        playerGoodsProvider.getPlayerGoodsEntity().addPlayerGoods();
    }

    public PlayerGoods createPlayerGoods(Player player, PlayerGoodsResource playerGoodsResource){
        PlayerGoods playerGoods=new PlayerGoods();
        playerGoods.setPlayerId(player.getId());
        playerGoods.setGoodsId(playerGoodsResource.getGoodsId());
        playerGoods.
    }
}
