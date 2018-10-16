package com.module.logic.move.packet;

import com.common.serial.Serializer;
import com.module.common.packetId.socketPacketId.SocketPacketId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class ReqMovePacket extends Serializer {

    @Autowired
    private SocketPacketId socketPacketId;

    private int moveId;

    @PostConstruct
    public void init(){
        socketPacketId.addPacketId2Request(SocketPacketId.REQ_MOVE,this.getClass());
    }

    public int getMoveId() {
        return moveId;
    }

    public void setMoveId(int moveId) {
        this.moveId = moveId;
    }

    @Override
    protected void read() {
        this.moveId=readInt();
    }

    @Override
    protected void write() {
        writeInt(moveId);
    }
}

