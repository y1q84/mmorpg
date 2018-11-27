package com.module.logic.player.resource;

import com.common.resource.annotation.Id;
import com.common.resource.annotation.Resources;
import com.module.logic.player.type.RoleType;

@Resources
public class PlayerPositionResource {

    @Id
    private RoleType roleType;
    private long mapId;

    public RoleType getRoleType() {
        return roleType;
    }

    public void setRoleType(RoleType roleType) {
        this.roleType = roleType;
    }

    public long getMapId() {
        return mapId;
    }

    public void setMapId(long mapId) {
        this.mapId = mapId;
    }
}
