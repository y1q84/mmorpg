package com.module.logic.map.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.map.obj.MapObject;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
@DescriptePacket(description = "响应进入场景")
public class RespEnterScenePacket extends AbstractPacket {

    @Protobuf(description = "地图id")
    private int mapId;
    @Protobuf(description = "场景id")
    private int sceneId;
    private Map<Integer,MapObject> mapObjectMap=new HashMap<>();

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

    public Map<Integer, MapObject> getMapObjectMap() {
        return mapObjectMap;
    }

    public void setMapObjectMap(Map<Integer, MapObject> mapObjectMap) {
        this.mapObjectMap = mapObjectMap;
    }

    @Override
    public short getPacketId() {
        return PacketId.ENTER_WORLD_RESP;
    }
}
