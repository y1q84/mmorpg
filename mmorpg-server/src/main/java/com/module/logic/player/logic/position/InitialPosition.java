package com.module.logic.player.logic.position;

public class InitialPosition {

    private long mapId;
    private MapType mapType;

    public InitialPosition(){
    }

    public InitialPosition(long mapId,MapType mapType){
        this.mapId=mapId;
        this.mapType=mapType;
    }

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public MapType getMapType() {
        return mapType;
    }

    public void setMapType(MapType mapType) {
        this.mapType = mapType;
    }
}
