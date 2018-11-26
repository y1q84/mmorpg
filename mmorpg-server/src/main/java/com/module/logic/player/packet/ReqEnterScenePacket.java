package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求进入场景")
public class ReqEnterScenePacket extends AbstractPacket {
    @Protobuf(description = "玩家id")
    private long playerId;
    @Protobuf(description = "场景id")
    private long sceneId;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public long getSceneId() {
        return sceneId;
    }

    public void setSceneId(long sceneId) {
        this.sceneId = sceneId;
    }

    @Override
    public short getPacketId() {
        return PacketId.ENTER_WORLD_REQ;
    }
}
