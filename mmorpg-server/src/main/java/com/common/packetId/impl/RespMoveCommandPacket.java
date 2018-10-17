package com.common.packetId.impl;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;

public class RespMoveCommandPacket extends AbstractPaket {

    @Protobuf
    private long playerId;

    @Protobuf
    private int status;

    @Override
    public short getPacketId() {
        return PacketId.MOVE_COMMAND_RESP;
    }
}
