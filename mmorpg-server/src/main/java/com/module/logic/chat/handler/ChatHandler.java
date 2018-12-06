package com.module.logic.chat.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.session.Session;
import com.module.logic.chat.packet.ReqChatWithOtherPacket;
import com.module.logic.chat.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;

@WsClass
public class ChatHandler {
    @Autowired
    private ChatService chatService;

    @WsMethod
    public void ChatWithOther(Session session, ReqChatWithOtherPacket reqChatWithOtherPacket){
        chatService.chatWithOther(session,reqChatWithOtherPacket);
    }
}
