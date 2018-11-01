package com.module.logic.map.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.map.packet.vo.PlayerInfo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@DescriptePacket(description = "响应进入场景")
public class RespEnterScenePacket extends AbstractPacket {

    @Protobuf(description = "地图id")
    private int mapId;
    @Protobuf(description = "场景id")
    private int sceneId;
    @Protobuf(description = "场景内所有物体内容")
    private List<PlayerInfo> mapObject=new ArrayList<>();

    public int getMapId() {
        return mapId;
    }

    public void setMapId(int mapId) {
        this.mapId = mapId;
    }

    public int getSceneId() {
        return sceneId;
    }

    public void setSceneId(int sceneId) {
        this.sceneId = sceneId;
    }

    public List<PlayerInfo> getMapObjectMap() {
        return mapObject;
    }

    public void addMapObject(List<PlayerInfo> list) {
        this.mapObject=list;
    }

    @Override
    public short getPacketId() {
        return PacketId.ENTER_WORLD_RESP;
    }
}
