package com.module.logic.chat.manager;

import com.common.resource.provider.ResourceProvider;
import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import com.module.logic.chat.resource.ChannelResource;
import com.module.logic.chat.scope.AbstractChatScopeHandler;
import com.module.logic.chat.scope.ChatScopeType;
import com.module.logic.player.Player;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ChatManager {

    @Autowired
    private ResourceProvider<ChannelResource,Integer> resourceProvider;

    private BiMap<ChatScopeType, AbstractChatScopeHandler> type2Handler= HashBiMap.create();

    public void registerChatType2Handler(AbstractChatScopeHandler abstractChatScopeHandler){
        type2Handler.put(abstractChatScopeHandler.getChatScopeType(),abstractChatScopeHandler);
    }

    public void dealWithChat(Player player,int channelId,String message){
        //需要根据channel获取到type
        List<ChannelResource> list=resourceProvider.readList();
        list.forEach((k)->{
            if(k.getChannelId()==channelId){
                type2Handler.get(k.getChatScopeType()).dealWithChat(player,channelId,message);
            }
        });
    }
}
