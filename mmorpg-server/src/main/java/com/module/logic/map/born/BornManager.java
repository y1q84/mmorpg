package com.module.logic.map.born;

import com.common.resource.provider.ResourceProvider;
import com.common.resource.provider.StaticResourceProvider;
import com.module.logic.map.MapInstance;
import com.module.logic.map.manager.MapManager;
import com.module.logic.map.obj.CreatureObject;
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
    private Map<Long, List<CreatureResource>> mapId2Creature=new HashMap<>();
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

        StaticResourceProvider srp=null;
        srp=((StaticResourceProvider)mapResourceProvider);
        srp.reload();
        List<MapResource> mapResources=srp.getList();
        //遍历地图，给每张地图初始化对应的资源
        for(MapResource mapResource:mapResources){
            //获取生物资源
            srp=(StaticResourceProvider)creatureResourceProvider;
            srp.reload();
            List<CreatureResource> creatureResources=srp.getList();

            List<CreatureResource> cr=new ArrayList<>();
            //遍历所有生物资源
            for(CreatureResource creatureResource:creatureResources){
                //给每1张地图加载对应的N个生物资源
                //根据mapid是否相等判断
                if(mapResource.getMapId()==creatureResource.getMapId()){
                    cr.add(creatureResource);
                }
            }
            mapId2Creature.put(mapResource.getMapId(),cr);
        }
    }


    public void produceAll(){
        Map<Long,MapInstance> map=MapManager.getInstance().getId2Map();
        map.forEach((k,v)->{
            produceCreature(v.getMapId());
        });
    }

    public void produceCreature(long mapId){
        List<CreatureResource> creatureResources=mapId2Creature.get(mapId);
        for(CreatureResource c:creatureResources){
            //创建一个生物
            CreatureObject creatureObject=null;
            //添加到场景中
            MapManager.getInstance().addCreatureInMap(mapId,creatureObject);
        }

    }

    public static BornManager getInstance(){
        return self;
    }
}
