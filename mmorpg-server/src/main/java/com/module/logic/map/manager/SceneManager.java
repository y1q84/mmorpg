package com.module.logic.map.manager;

import com.module.logic.map.Scene;
import com.module.logic.map.obj.MapObject;
import com.module.logic.player.Player;
import org.springframework.stereotype.Component;

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

    public Map<Long,MapObject> getObjectInScene(int sceneId) {
        Scene scene=sceneMap.get(sceneId);
        return scene.getObjectInMap();
    }
    public void addObjectInScene(int sceneId,MapObject mapObject){
        Scene scene=sceneMap.get(sceneId);
        scene.getObjectInMap().put(mapObject.getId(),mapObject);
    }

    public Map<Long,Player> getPlayerInScene(int sceneId){
        Scene scene=sceneMap.get(sceneId);
        return scene.getPlayerInMap();
    }

    public void addPlayerInScene(int sceneId,Player player){
        Scene scene=sceneMap.get(sceneId);
        scene.getPlayerInMap().put(player.getId(),player);
    }

    //

}
