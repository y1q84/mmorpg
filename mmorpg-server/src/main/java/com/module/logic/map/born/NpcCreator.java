package com.module.logic.map.born;

import com.module.logic.map.MapInstance;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.obj.ObjectType;
import com.module.logic.map.resource.CreatureResource;
import com.module.logic.obj.npc.Npc;
import org.springframework.stereotype.Component;

@Component
public class NpcCreator extends AbstractCreator {
    @Override
    public CreatureObject createObject(CreatureResource creatureResource, MapInstance mapInstance) {
        Npc npc=new Npc();
        npc.setId(creatureResource.getCreatureId());
        npc.setName(creatureResource.getName());
        npc.setHp(creatureResource.getHp());
        npc.setMapId(creatureResource.getMapId());
        return npc;
    }

    @Override
    public ObjectType getObjectType() {
        return ObjectType.NPC;
    }
}
