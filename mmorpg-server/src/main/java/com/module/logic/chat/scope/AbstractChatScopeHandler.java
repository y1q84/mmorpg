package com.module.logic.chat.scope;

import com.module.logic.chat.manager.ChatManager;
import com.module.logic.player.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public abstract class AbstractChatScopeHandler {

    @Autowired
    private ChatManager chatManager;

    @PostConstruct
    public void init(){
        chatManager.registerChatType2Handler(this);
    }

    public abstract ChatScopeType getChatScopeType();

    //方便扩展，其他频道可能需要过滤自己
    public abstract void dealWithChat(Player player,int channelId,String content);
}
