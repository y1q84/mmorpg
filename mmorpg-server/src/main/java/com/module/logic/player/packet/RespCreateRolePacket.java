package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应创建角色")
public class RespCreateRolePacket extends AbstractPacket {

    @Protobuf(description = "返回结果")
    private String result;
    @Protobuf(description = "角色id")
    private int playerId;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    @Override
    public short getPacketId() {
        return PacketId.CREATE_ROLE_RESP;
    }
}
