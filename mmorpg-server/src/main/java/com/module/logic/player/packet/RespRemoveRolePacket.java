package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应将玩家挤下线")
public class RespRemoveRolePacket extends AbstractPacket {
    @Protobuf(description = "原因")
    private String reason;

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    @Override
    public short getPacketId() {
        return PacketId.REMOVE_ROLE_RESP;
    }
}
