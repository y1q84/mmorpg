package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求切换场景")
public class ReqChangeMapInstancePacket extends AbstractPacket {
    @Protobuf(description = "旧场景id")
    private long oldMapId;
    @Protobuf(description = "新场景id")
    private long newMapId;

    public long getOldMapId() {
        return oldMapId;
    }

    public void setOldMapId(long oldMapId) {
        this.oldMapId = oldMapId;
    }

    public long getNewMapId() {
        return newMapId;
    }

    public void setNewMapId(long newMapId) {
        this.newMapId = newMapId;
    }

    @Override
    public short getPacketId() {
        return PacketId.CHANGE_SCENE_REQ;
    }
}
