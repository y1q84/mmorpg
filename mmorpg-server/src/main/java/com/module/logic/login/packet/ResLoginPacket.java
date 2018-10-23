package com.module.logic.login.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "返回登录结果")
public class ResLoginPacket  extends AbstractPacket {

    @Protobuf(description = "登录结果")
    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    @Autowired
    PacketId packetId;

    @Override
    public short getPacketId() {
        return packetId.LOGIN_RESP;
    }
}