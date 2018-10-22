package com.module.logic.gm.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class RespCommandPacket extends AbstractPaket {

    @Protobuf
    private int commandId;

    public int getCommandId() {
        return commandId;
    }

    public void setCommandId(int commandId) {
        this.commandId = commandId;
    }


    @Override
    public short getPacketId() {
        return PacketId.COMMAND_RESP;
    }
}
