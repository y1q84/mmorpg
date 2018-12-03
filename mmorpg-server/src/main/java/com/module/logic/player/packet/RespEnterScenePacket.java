package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.player.packet.vo.ObjectInMapInfo;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@DescriptePacket(description = "响应进入场景")
public class RespEnterScenePacket extends AbstractPacket {

    @Protobuf(description = "默认场景id")
    private long sceneId;
    @Protobuf(description = "场景列表")
    private List<Long> sceneIds=new ArrayList<>();
    @Protobuf(description = "场景内所有物体内容")
    private List<ObjectInMapInfo> mapObject=new ArrayList<>();

    public long getSceneId() {
        return sceneId;
    }

    public void setSceneId(long sceneId) {
        this.sceneId = sceneId;
    }

    public List<Long> getSceneIds() {
        return sceneIds;
    }

    public void setSceneIds(List<Long> sceneIds) {
        this.sceneIds = sceneIds;
    }

    public List<ObjectInMapInfo> getMapObjectMap() {
        return mapObject;
    }

    public void addMapObject(ObjectInMapInfo object) {
        this.mapObject.add(object);
    }

    public void setMapObject(List<ObjectInMapInfo> objectInfo){
        this.mapObject=objectInfo;
    }

    @Override
    public short getPacketId() {
        return PacketId.ENTER_WORLD_RESP;
    }
}
