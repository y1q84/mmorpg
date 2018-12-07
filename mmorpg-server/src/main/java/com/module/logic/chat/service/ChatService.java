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
        //规定：第一个为channelId,第二个为生物id(可为空),第三个为消息内容
        int channelId=Integer.parseInt(arr[0]);
        String message="";
        long creatureId=-1;
        if(arr.length>2){
            creatureId=Long.parseLong(arr[1]);
            message=arr[2];
        }else{
            message=arr[1];
        }
        chatManager.dealWithChat(player,channelId,creatureId,message);
    }
}
