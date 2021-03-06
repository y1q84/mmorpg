package com.module.logic.map;

import com.module.logic.map.obj.MapObject;
import com.module.logic.player.Player;

import java.util.HashMap;
import java.util.Map;

public class MapInstance {

    private long mapId;
    private String name;
    private int neighborMark;
    private Map<Long,MapObject> objectInMap=new HashMap<>();
    private Map<Long, Player> playerInMap=new HashMap<>();

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getNeighborMark() {
        return neighborMark;
    }

    public void setNeighborMark(int neighborMark) {
        this.neighborMark = neighborMark;
    }

    public Map<Long,MapObject> getObjectInMap() {
        return objectInMap;
    }

    public void addObjectInMap(long id,MapObject mapObject) {
        //当切换角色登录时，应该将原来角色移除
        if(objectInMap.put(id,mapObject)!=null){
            return;
        }
        if(mapObject instanceof Player){
            addPlayerInMap(id,(Player)mapObject);
        }
    }

    public void removeObjectInMap(MapObject mapObject){
        objectInMap.remove(mapObject.getId());
        if(mapObject instanceof Player){
            getPlayerInMap().remove(mapObject.getId());
        }
    }

    public Map<Long, Player> getPlayerInMap() {
        return playerInMap;
    }

    public void addPlayerInMap(Long playerId, Player player) {
        this.playerInMap.put(playerId,player);
    }
}
