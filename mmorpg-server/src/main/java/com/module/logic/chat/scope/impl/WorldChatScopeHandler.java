package com.module.logic.chat.scope.impl;

import com.common.session.Session;
import com.common.util.PacketUtil;
import com.module.logic.chat.packet.RespChatWithOtherPacket;
import com.module.logic.chat.scope.AbstractChatScopeHandler;
import com.module.logic.chat.scope.ChatScopeType;
import com.module.logic.player.Player;
import com.module.logic.player.manager.PlayerManager;
import org.springframework.stereotype.Component;

import java.util.Map;

@Component
public class WorldChatScopeHandler extends AbstractChatScopeHandler {

    @Override
    public ChatScopeType getChatScopeType() {
        return ChatScopeType.WORLD;
    }

    @Override
    public void dealWithChat(Player player, int channelId, long creatureId ,String content) {
       //向其他玩家发送消息
        Map<Player, Session> player2Session=PlayerManager.getInstance().getPlayer2session();
        player2Session.forEach((k,v)->{
            //给每个玩家发送消息包(包括自己)
            RespChatWithOtherPacket respChatWithOtherPacket=new RespChatWithOtherPacket();
            respChatWithOtherPacket.setPlayerId(player.getId());
            respChatWithOtherPacket.setChannelId(channelId);
            respChatWithOtherPacket.setCreatureId(creatureId);
            respChatWithOtherPacket.setContent(content);
            PacketUtil.sendPacket(v,respChatWithOtherPacket);
        });
    }
}
