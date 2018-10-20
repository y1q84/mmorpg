package com.common.packetId.impl;


import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
public class ReqLoginPacket extends AbstractPaket {

    @Protobuf
    private String userName;

    @Protobuf
    private String password;

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public short getPacketId() {
        return PacketId.LOGIN_REQ;
    }
}
