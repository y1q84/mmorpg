package com.module.logic.map.born;

import com.module.logic.map.MapInstance;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.obj.ObjectType;
import com.module.logic.map.resource.CreatureResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

public abstract class AbstractCreator {

    @PostConstruct
    public void init(){
        BornManager.getInstance().registerType2Creator(this);
    }

    public abstract CreatureObject createObject(CreatureResource creatureResource, MapInstance mapInstance);
    public abstract ObjectType getObjectType();

}
