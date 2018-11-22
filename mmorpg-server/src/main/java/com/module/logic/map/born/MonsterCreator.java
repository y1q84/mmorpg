package com.module.logic.map.born;

import com.module.logic.map.MapInstance;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.obj.ObjectType;
import com.module.logic.map.resource.CreatureResource;
import com.module.logic.monster.resource.Monster;
import org.springframework.stereotype.Component;

@Component
public class MonsterCreator extends AbstractCreator {
    @Override
    public CreatureObject createObject(CreatureResource creatureResource, MapInstance mapInstance) {
        Monster monster=new Monster();
        monster.setId(creatureResource.getCreatureId());
        monster.setName(creatureResource.getName());
        monster.setHp(creatureResource.getHp());
        monster.setLevel(creatureResource.getLevel());
        //等等...其他属性设置
        return monster;
    }

    @Override
    public ObjectType getObjectType() {
        return ObjectType.MONSTER;
    }
}
