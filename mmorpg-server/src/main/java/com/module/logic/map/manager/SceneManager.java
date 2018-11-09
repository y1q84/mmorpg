package com.module.logic.map.manager;

import com.module.logic.map.Scene;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.Player;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.Map;

@Component
public class SceneManager {

    private Map<Integer, Scene> sceneMap=new HashMap<>();

    public Scene getSceneById(int sceneId) {
        return sceneMap.get(sceneId);
    }

    public void addSceneMap(int sceneId,Scene scene) {
        this.sceneMap.put(sceneId,scene);
    }

    @PostConstruct
    public void init(){
        sceneMap.put(1,new Scene());
    }

    public Map<Long,MapObject> getObjectInScene(int sceneId) {
        Scene scene=sceneMap.get(sceneId);
        return scene.getObjectInMap();
    }
    //增加场景里面的生物，何时增加呢？应该时在玩家发出进入场景请求后，响应进入场景之前添加生物
    public void addObjectInScene(int sceneId,MapObject mapObject){
        Scene scene=sceneMap.get(sceneId);
        //scene.getObjectInMap().put(mapObject.getId(),mapObject);
        scene.addObjectInMap(mapObject.getId(),mapObject);
    }

    public Map<Long,Player> getPlayerInScene(int sceneId){
        Scene scene=sceneMap.get(sceneId);
        return scene.getPlayerInMap();
    }

    public void addPlayerInScene(int sceneId,Player player){
        Scene scene=sceneMap.get(sceneId);
//        scene.getPlayerInMap().put(player.getId(),player);
        scene.addPlayerInMap(player.getId(),player);
    }

    //

}
