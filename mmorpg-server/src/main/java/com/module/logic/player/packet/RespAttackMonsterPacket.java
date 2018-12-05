package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应攻击怪物")
public class RespAttackMonsterPacket extends AbstractPacket {
    @Protobuf(description = "怪物血量")
    private int monsterHp;

    public int getMonsterHp() {
        return monsterHp;
    }

    public void setMonsterHp(int monsterHp) {
        this.monsterHp = monsterHp;
    }

    @Override
    public short getPacketId() {
        return PacketId.ATTACK_MONSTER_RESP;
    }
}
