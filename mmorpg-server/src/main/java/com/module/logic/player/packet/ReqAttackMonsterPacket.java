package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求攻击怪物")
public class ReqAttackMonsterPacket extends AbstractPacket {
    @Protobuf(description = "场景id")
    private long mapId;
    @Protobuf(description = "怪物id")
    private long monsterId;

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public long getMonsterId() {
        return monsterId;
    }

    public void setMonsterId(long monsterId) {
        this.monsterId = monsterId;
    }

    @Override
    public short getPacketId() {
        return PacketId.ATTACK_MONSTER_REQ;
    }
}
