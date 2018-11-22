package com.module.logic.map.resource;

import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;

@Resources(suffix = "xlsx",path = "resource/map")
public class MapResource {
    @Id
    private long mapId;
    private String mapName;
    //该地图上其他生物资源

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public String getMapName() {
        return mapName;
    }

    public void setMapName(String mapName) {
        this.mapName = mapName;
    }
}
