package com.module.logic.chat.service;

import com.common.session.Session;
import com.module.logic.chat.manager.ChatManager;
import com.module.logic.chat.packet.ReqChatWithOtherPacket;
import com.module.logic.player.Player;
import com.module.logic.player.manager.PlayerManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ChatService {

    @Autowired
    private PlayerManager playerManager;
    @Autowired
    private ChatManager chatManager;

    public void chatWithOther(Session session, ReqChatWithOtherPacket reqChatWithOtherPacket){
        Player player=playerManager.getPlayer2session().inverse().get(session);
        String content=reqChatWithOtherPacket.getContent();
        String[] arr=content.split("\\|");
        int channelId=Integer.parseInt(arr[0]);
        String message=arr[1];
        chatManager.dealWithChat(player,channelId,message);
    }
}
