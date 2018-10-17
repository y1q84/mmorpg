package com.common.packetId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public abstract class AbstractPaket {

    @Autowired
    private PacketId packetId;

    public abstract short getPacketId() ;

    @PostConstruct
    public void init(){

        packetId.registerpacketId2AbstractPacket(this);
        packetId.registerPacketId2Codec(this);
    }
}
