package com.module.logic.map.manager;

import com.common.resource.provider.ResourceProvider;
import com.common.resource.provider.StaticResourceProvider;
import com.module.logic.map.MapInstance;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.resource.MapResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class MapManager {

    //地图资源
    @Autowired
    private ResourceProvider<MapResource,Long> mapResourcProvider;

    //场景id与场景对象的映射
    private Map<Long,MapInstance> id2Map =new HashMap<>();

    private static MapManager self;

    //在bean初始化同时初始化场景资源
    @PostConstruct
    public void init(){
        self=this;
        StaticResourceProvider s=((StaticResourceProvider)mapResourcProvider);
        s.reload();
        List<MapResource> list=s.getList();
        for(MapResource mapResource:list){
            //由mapresource产生mapInstance，并放进集合
            MapInstance mapInstance=createMapInstance(mapResource);
            id2Map.put(mapInstance.getMapId(),mapInstance);
        }

    }

    public static MapManager getInstance(){
        return self;
    }

    public Map<Long, MapInstance> getId2Map() {
        return id2Map;
    }

    public void setId2Map(Map<Long, MapInstance> id2Map) {
        this.id2Map = id2Map;
    }

    //创建一个场景
    public MapInstance createMapInstance(MapResource mapResource){
        MapInstance mapInstance=new MapInstance();
        mapInstance.setMapId(mapResource.getMapId());
        mapInstance.setName(mapResource.getMapName());
        return mapInstance;
    }

    //进入场景
    public void enterWorld(int mapId, CreatureObject creatureObject){
        //判断角色是否已经在场景里面了
        if(creatureObject.isInTheWorld()){
            return;
        }
        //根据场景id获取到对应的场景
        MapInstance mapInstance=id2Map.get(mapId);
        if(mapInstance==null){
            return ;
        }
        creatureObject.setIsInTheWorld(true);

        mapInstance.addObjectInMap(creatureObject.getObjectId(),creatureObject);
    }

    public void addCreatureInMap(long mapId,CreatureObject creatureObject){

    }

}
