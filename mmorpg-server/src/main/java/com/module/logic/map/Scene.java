package com.module.logic.map;

import com.module.logic.map.obj.MapObject;

import java.util.ArrayList;
import java.util.List;

public class Scene {

    private int sceneId;
    private int mapId;
    private String name;
    private List<MapObject> objectInMap=new ArrayList<>();

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<MapObject> getObjectInMap() {
        return objectInMap;
    }

    public void addObjectToMap(MapObject mapObject) {
        objectInMap.add(mapObject);
    }
}
