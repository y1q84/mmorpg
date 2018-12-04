package com.common.session;

import io.netty.channel.Channel;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

public class Session {

    private static final AtomicInteger SEQ = new AtomicInteger(1);

    private int id;
    private Channel channel;
    private long mapId;

    private Map<String,String> sessionId2account=new HashMap<>();
    //连接断开事件
    private List<IsessionCloseEvent> sessionCloseEvents=new ArrayList<>();

    public static Session valueOf(Channel channel){
        Session session = new Session();
        session.id=SEQ.getAndIncrement();
        session.channel=channel;
        return session;
    }

    public int getId() {
        return id;
    }

    public Channel getChannel() {
        return channel;
    }

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public void add(String sessionId, String account){
        sessionId2account.put(sessionId,account);
    }

    public String getAccount(String sessionId){
        return sessionId2account.get(sessionId);
    }
    public List<IsessionCloseEvent> getSessionCloseEvents() {
        return sessionCloseEvents;
    }

    public void setSessionCloseEvents(List<IsessionCloseEvent> sessionCloseEvents) {
        this.sessionCloseEvents = sessionCloseEvents;
    }
}
