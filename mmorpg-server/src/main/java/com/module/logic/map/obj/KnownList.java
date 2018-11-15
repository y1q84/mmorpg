package com.module.logic.map.obj;

import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;

public class KnownList {

    private BiMap<Long,CreatureObject> knowns= HashBiMap.create();

    public void addKnown(CreatureObject creatureObject){
        knowns.put(creatureObject.getId(),creatureObject);
    }

    public <T extends CreatureObject> T getKnown(long id){
        return (T)knowns.get(id);
    }

    public BiMap<Long, CreatureObject> getKnowns() {
        return knowns;
    }

}
