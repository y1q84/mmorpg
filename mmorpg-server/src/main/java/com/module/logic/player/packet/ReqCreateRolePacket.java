package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.player.type.RoleType;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求创建角色")
public class ReqCreateRolePacket extends AbstractPacket {

    @Protobuf(description = "角色名")
    private String playerName;
    @Protobuf(description = "性别")
    private String sex;
    @Protobuf(description = "角色类型")
    private RoleType roleType;

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public RoleType getRoleType() {
        return roleType;
    }

    public void setRoleType(RoleType roleType) {
        this.roleType = roleType;
    }

    @Override
    public short getPacketId() {
        return PacketId.CREATE_ROLE_REQ;
    }
}
