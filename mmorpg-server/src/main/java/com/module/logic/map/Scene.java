package com.module.logic.map;

import com.module.logic.map.obj.MapObject;
import com.module.logic.player.Player;

import java.util.HashMap;
import java.util.Map;

public class Scene {

    private int sceneId;
    private int mapId;
    private String name;
    private Map<Long,MapObject> objectInMap=new HashMap<>();
    private Map<Long, Player> playerInMap=new HashMap<>();

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

    public Map<Long,MapObject> getObjectInMap() {
        return objectInMap;
    }

    public void addObjectInMap(long id,MapObject mapObject) {

        objectInMap.put(id,mapObject);
    }

    public Map<Long, Player> getPlayerInMap() {
        return playerInMap;
    }

    public void addPlayerInMap(Long playerId, Player player) {
        this.playerInMap.put(playerId,player);
    }
}
