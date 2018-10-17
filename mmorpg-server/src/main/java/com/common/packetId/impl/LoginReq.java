package com.common.packetId.impl;


import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class LoginReq extends AbstractPaket {

    @Protobuf
    private long playerId;

    @Protobuf
    private String pass;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    @Override
    public short getPacketId() {
        return PacketId.LOGIN_REQ;
    }
}
