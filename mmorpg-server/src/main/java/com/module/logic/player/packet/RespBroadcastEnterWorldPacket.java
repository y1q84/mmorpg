package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

/**
 * author:ydx
 * create 2018\11\12 0012
 */
@Component
@DescriptePacket(description = "广播玩家进入场景消息")
public class RespBroadcastEnterWorldPacket extends AbstractPacket {

    @Protobuf(description = "场景id")
    private long mapId;
    @Protobuf(description = "玩家信息")
    private long playerId;
    @Protobuf(description = "广播内容")
    private String result;

    public long getMapId() {
        return mapId;
    }
    public void setMapId(long mapId) {
        this.mapId = mapId;
    }
    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    @Override
    public short getPacketId() {
        return PacketId.BROADCAST_ENTER_WORLD_RESP;
    }
}
