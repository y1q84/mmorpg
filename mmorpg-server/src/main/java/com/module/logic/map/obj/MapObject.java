package com.module.logic.map.obj;

import java.util.HashMap;
import java.util.Map;

/**
 * 地图上的对象
 */
public class MapObject {

    //地图上对象id
    private long id;
    private long mapId;
    //是否可见
    private boolean isVisible;
    private ObjectType objectType;

    private Map<Long,Object> objInMap=new HashMap<>();

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }

    public boolean isVisible() {
        return isVisible;
    }

    public void setVisible(boolean visible) {
        isVisible = visible;
    }

    public ObjectType getObjectType() {
        return objectType;
    }

    public void setObjectType(ObjectType objectType) {
        this.objectType = objectType;
    }

    public void addObjInMap(long objectId,Object obj){
        this.objInMap.put(objectId,obj);
    }

    public Object getObjInMap(long objectId){
        return this.objInMap.get(objectId);
    }
}
