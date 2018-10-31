package com.module.logic.map;

import com.module.logic.map.obj.MapObject;

import java.util.HashMap;
import java.util.Map;

public class Scene {

    private int sceneId;
    private int mapId;
    private String name;
    private Map<Integer, MapObject> objectInMap=new HashMap<>();

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

    public Map<Integer,MapObject> getObjectInMap() {
        return objectInMap;
    }

    public void addObjectToMap(int id,MapObject mapObject) {
        objectInMap.put(id,mapObject);
    }
}
