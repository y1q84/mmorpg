package com.common.session;

import io.netty.channel.Channel;

import java.util.concurrent.atomic.AtomicInteger;

public class Session {

    private static final AtomicInteger SEQ = new AtomicInteger(1);

    private int id;
    private Channel channel;

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
}
