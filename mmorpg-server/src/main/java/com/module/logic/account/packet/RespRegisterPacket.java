package com.module.logic.account.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应账号注册")
public class RespRegisterPacket extends AbstractPacket {
    @Protobuf(description = "返回结果")
    private String result;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    @Override
    public short getPacketId() {
        return PacketId.REGISTER_RESP;
    }
}
