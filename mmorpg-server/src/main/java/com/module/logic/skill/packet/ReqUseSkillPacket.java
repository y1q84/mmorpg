package com.module.logic.skill.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求使用技能")
public class ReqUseSkillPacket extends AbstractPacket {
    @Protobuf(description = "场景id")
    private long mapId;
    @Protobuf(description = "目标id")
    private long targetId;
    @Protobuf(description = "技能id")
    private int skillId;

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public long getTargetId() {
        return targetId;
    }

    public void setTargetId(long targetId) {
        this.targetId = targetId;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    @Override
    public short getPacketId() {
        return PacketId.USE_SKILL_REQ;
    }
}
