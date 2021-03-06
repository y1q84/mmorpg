package com.module.logic.gm.packet;


import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class ReqCommandPacket extends AbstractPacket {

//    @Protobuf
//    private String  commandId;
//
//    public String getCommandId() {
//        return commandId;
//    }
//
//    public void setCommandId(String commandId) {
//        this.commandId = commandId;
//    }

    @Protobuf
    private int   moveId;

    public int getmoveId() {
        return moveId;
    }

    public void setmoveId(int moveId) {
        this.moveId = moveId;
    }

    @Override
    public short getPacketId() {
        return PacketId.COMMAND_REQ;
    }

}
