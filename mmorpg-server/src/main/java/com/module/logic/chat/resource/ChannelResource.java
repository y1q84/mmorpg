package com.module.logic.chat.resource;

import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.module.logic.chat.scope.ChatScopeType;

@Resources
public class ChannelResource {

    @Id
    private int channelId;
    private ChatScopeType chatScopeType;

    public int getChannelId() {
        return channelId;
    }

    public void setChannelId(int channelId) {
        this.channelId = channelId;
    }

    public ChatScopeType getChatScopeType() {
        return chatScopeType;
    }

    public void setChatScopeType(ChatScopeType chatScopeType) {
        this.chatScopeType = chatScopeType;
    }
}
