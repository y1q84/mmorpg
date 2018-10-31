package com.module.logic.map.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求进入场景")
public class ReqEnterScenePacket extends AbstractPacket {
    @Protobuf(description = "玩家id")
    private int playerId;
    @Protobuf(description = "场景id")
    private int sceneId;
    @Protobuf(description = "地图id")
    private int mapId;

    public int getPlayerId() {
        return playerId;
    }

    public void setPlayerId(int playerId) {
        this.playerId = playerId;
    }

    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public int getMapId() {
        return mapId;
    }

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    @Override
    public short getPacketId() {
        return PacketId.ENTER_WORLD_REQ;
    }
}
