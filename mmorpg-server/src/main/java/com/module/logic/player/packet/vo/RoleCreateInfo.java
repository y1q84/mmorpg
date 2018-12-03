package com.module.logic.player.packet.vo;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.module.logic.player.entity.PlayerEntity;

public class RoleCreateInfo {
    @Protobuf(description = "玩家角色id")
    private long id;
    @Protobuf(description = "性别")
    private String sex;
    @Protobuf(description = "名字")
    private String name;
    @Protobuf(description = "角色类型")
    private String roleType;

    public static RoleCreateInfo valueOf(Object object){
        RoleCreateInfo roleCreateInfo=new RoleCreateInfo();
        if(object instanceof PlayerEntity){
            PlayerEntity playerEntity=(PlayerEntity)object;
            roleCreateInfo.setId(playerEntity.getPlayerId());
            roleCreateInfo.setName(playerEntity.getPlayerName());
            roleCreateInfo.setSex(playerEntity.getSex());
            roleCreateInfo.setRoleType(playerEntity.getRoleType().toString());
        }
        return roleCreateInfo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRoleType() {
        return roleType;
    }

    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }
}
