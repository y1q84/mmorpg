package com.module.logic.map.resource;

import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.module.logic.map.obj.ObjectType;

@Resources(suffix = "xlsx",path = "resource/map")
public class CreatureResource {
    @Id
    private long creatureId;
    private String name;
    private long mapId;
    private int hp;
    private int level;
    private ObjectType objectType;

    public long getCreatureId() {
        return creatureId;
    }
    public void setCreatureId(long creatureId) {
        this.creatureId = creatureId;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public long getMapId() {
        return mapId;
    }
    public void setMapId(long mapId) {
        this.mapId = mapId;
    }
    public int getHp() {
        return hp;
    }
    public void setHp(int hp) {
        this.hp = hp;
    }
    public int getLevel() {
        return level;
    }
    public void setLevel(int level) {
        this.level = level;
    }
    public ObjectType getObjectType() {
        return objectType;
    }
    public void setObjectType(ObjectType objectType) {
        this.objectType = objectType;
    }
}
