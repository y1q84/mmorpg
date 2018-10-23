package com.common.packetId.impl;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;

public class RespMoveCommandPacket extends AbstractPacket {

    @Protobuf
    private long playerId;

    @Protobuf
    private int status;

    @Override
    public short getPacketId() {
        return PacketId.MOVE_COMMAND_RESP;
    }
}
