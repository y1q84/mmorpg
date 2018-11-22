package com.module.logic.map.born;

import com.module.logic.map.MapInstance;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.obj.ObjectType;
import com.module.logic.map.resource.CreatureResource;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Component
public abstract class AbstractCreator {

    private Map<ObjectType,AbstractCreator> type2Creator=new HashMap<>();

    @PostConstruct
    public void init(){
        type2Creator.put(getObjectType(),this);
    }
    public abstract CreatureObject createObject(CreatureResource creatureResource, MapInstance mapInstance);

    public abstract ObjectType getObjectType();

    public Map<ObjectType, AbstractCreator> getType2Creator() {
        return type2Creator;
    }

    public void setType2Creator(Map<ObjectType, AbstractCreator> type2Creator) {
        this.type2Creator = type2Creator;
    }

    public AbstractCreator getCreator(ObjectType objectType){
        return type2Creator.get(objectType);
    }
}
