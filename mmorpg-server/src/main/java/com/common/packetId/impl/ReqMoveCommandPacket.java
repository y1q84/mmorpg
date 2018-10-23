package com.common.packetId.impl;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class ReqMoveCommandPacket extends AbstractPacket {


    @Protobuf
    private int moveId;

    public int getMoveId() {
        return moveId;
    }

    public void setMoveId(int moveId) {
        this.moveId = moveId;
    }

    @Override
    public short getPacketId() {
        return PacketId.MOVE_COMMAND_REQ;
    }
}

