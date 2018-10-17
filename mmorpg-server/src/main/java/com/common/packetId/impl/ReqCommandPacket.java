package com.common.packetId.impl;


import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class ReqCommandPacket extends AbstractPaket {

    @Protobuf
    private String  commandId;

    public String getCommandId() {
        return commandId;
    }

    public void setCommandId(String commandId) {
        this.commandId = commandId;
    }

    @Override
    public short getPacketId() {
        return PacketId.COMMAND_REQ;
    }

}
