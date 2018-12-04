package com.common.session;

import io.netty.channel.ChannelId;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class SessionManager {
    private Map<ChannelId,Session> channelId2Session=new HashMap<>();

    public void addChannelId2Session(Session session){
        ChannelId id=session.getChannel().id();
        if(!channelId2Session.containsKey(id)){
            channelId2Session.put(id,session);
        }
    }

    public void removeChannelId2Session(ChannelId id){
        Session session=channelId2Session.get(id);
        if(session==null){
            return;
        }
        List<IsessionCloseEvent> list= session.getSessionCloseEvents();
        //连接断开的时候执行此操作
        list.forEach((v)->{
            v.onSessionClose();
        });
    }

    public Map<ChannelId, Session> getChannelId2Session() {
        return channelId2Session;
    }

    public void setChannelId2Session(Map<ChannelId, Session> channelId2Session) {
        this.channelId2Session = channelId2Session;
    }
}
