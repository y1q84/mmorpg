package com.module.logic.player.logic.position.handler;

import com.common.resource.provider.ResourceProvider;
import com.module.logic.player.Player;
import com.module.logic.player.logic.position.MapType;
import com.module.logic.player.resource.PlayerPositionResource;
import com.module.logic.player.type.RoleType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
@Component
public class DefaultInitialPositionHandler extends AbstractInitialPositionHandler {


    @Autowired
    public ResourceProvider<PlayerPositionResource, RoleType> resourceProvider;

    @Override
    public MapType getMapType() {
        return MapType.DEFAULT;
    }

    @Override
    public void initialPostion(Player player) {
        List<PlayerPositionResource> list= resourceProvider.readList();
        list.forEach((k)->{
            if(player.getRoleType()==k.getRoleType()){
                //设置玩家在默认场景id
                player.setMapId(k.getMapId());
                player.getPlayerEntity().setMapId(k.getMapId());
            }
        });
    }
}
