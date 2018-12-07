package com.module.logic.map.born;

import com.common.resource.provider.ResourceProvider;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.CreatureObject;
import com.module.logic.map.obj.ObjectType;
import com.module.logic.map.resource.CreatureResource;
import com.module.logic.map.resource.MapResource;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class BornManager {
    Logger logger=LoggerFactory.getLogger(BornManager.class);

    //存放场景id与生物资源的映射
    private Map<Long, List<CreatureResource>> mapId2CreatureResource=new HashMap<>();
    //生物类型与生物创造器的映射
    private Map<ObjectType,AbstractCreator> type2Creator=new HashMap<>();
    /**
     * 添加生物类型与生物构造器的映射
     * @param abstractCreator
     */
    public void registerType2Creator(AbstractCreator abstractCreator){
        type2Creator.put(abstractCreator.getObjectType(),abstractCreator);
    }

    //生物资源配置
    @Autowired
    private ResourceProvider<CreatureResource,Long> creatureResourceProvider;
    //地图资源配置
    @Autowired
    private ResourceProvider<MapResource,Long> mapResourceProvider;

    private static BornManager self;

    @PostConstruct
    public void init(){
        self=this;

        List<MapResource> mapResources=mapResourceProvider.readList();;
        //遍历地图，给每张地图初始化对应的资源
        for(MapResource mapResource:mapResources){
            //获取生物资源
            List<CreatureResource> creatureResources=creatureResourceProvider.readList();
            List<CreatureResource> cr=new ArrayList<>();
            //遍历所有生物资源
            for(CreatureResource creatureResource:creatureResources){
                //给每1张地图加载对应的N个生物资源
                //根据mapid是否相等判断
                if(mapResource.getMapId()==creatureResource.getMapId()){
                    cr.add(creatureResource);
                }
            }
            mapId2CreatureResource.put(mapResource.getMapId(),cr);
        }
    }

    /**
     * 初始化地图上的所有生物
     */
    public void produceAll(){
        //获取场景地图集合
        Map<Long,MapInstance> map=MapManager.getInstance().getId2Map();
        List<MapResource> mapResources=mapResourceProvider.readList();
        for(Map.Entry<Long,MapInstance> entry:map.entrySet()){
            //根据场景id获取对应的地图资源
            for(MapResource mapResource:mapResources){
                if(entry.getKey().equals(mapResource.getMapId())){
                    //产生该地图上的所有生物资源
                    produceCreature(entry.getValue());
                    break;
                }
            }
        }
    }

    /**
     * 产生生物R
     * @param mapInstance
     */
    public void produceCreature(MapInstance mapInstance){
        long mapId=mapInstance.getMapId();
        //根据mapid获取到该地图上的所有生物资源
        List<CreatureResource> creatureResources=mapId2CreatureResource.get(mapId);
        for(CreatureResource c:creatureResources){
            //创建一个生物
            //怎么根据生物资源创建具体生物呢？我怎么知道要创建什么类型的生物呢？可以根据生物类型
//            AbstractCreator creator=abstractCreator.getCreator(c.getObjectType());
            AbstractCreator creator=type2Creator.get(c.getObjectType());
            CreatureObject creatureObject=creator.createObject(c,mapInstance);
            //添加到场景中
            MapManager.getInstance().addCreatureToMap(mapId,creatureObject);
        }

    }
    public static BornManager getInstance(){
        return self;
    }

    public Map<Long, List<CreatureResource>> getMapId2CreatureResource() {
        return mapId2CreatureResource;
    }

    public void setMapId2CreatureResource(Map<Long, List<CreatureResource>> mapId2CreatureResource) {
        this.mapId2CreatureResource = mapId2CreatureResource;
    }


    public Map<ObjectType, AbstractCreator> getType2Creator() {
        return type2Creator;
    }

    public void setType2Creator(Map<ObjectType, AbstractCreator> type2Creator) {
        this.type2Creator = type2Creator;
    }

    public AbstractCreator getCreator(ObjectType objectType){
        return type2Creator.get(objectType);
    }

    public ResourceProvider<CreatureResource, Long> getCreatureResourceProvider() {
        return creatureResourceProvider;
    }

    public void setCreatureResourceProvider(ResourceProvider<CreatureResource, Long> creatureResourceProvider) {
        this.creatureResourceProvider = creatureResourceProvider;
    }

    public ResourceProvider<MapResource, Long> getMapResourceProvider() {
        return mapResourceProvider;
    }

    public void setMapResourceProvider(ResourceProvider<MapResource, Long> mapResourceProvider) {
        this.mapResourceProvider = mapResourceProvider;
    }

}
