package com.module.logic.player.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.account.packet.vo.PlayerEntityInfo;
import com.module.logic.player.packet.vo.RoleCreateInfo;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应创建角色")
public class RespCreateRolePacket extends AbstractPacket {

    @Protobuf(description = "返回结果")
    private String result;
    @Protobuf(description = "角色id")
    private long playerId;
    @Protobuf(description = "创建的角色信息")
    private RoleCreateInfo roleCreateInfo;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public RoleCreateInfo getRoleCreateInfo() {
        return roleCreateInfo;
    }

    public void setRoleCreateInfo(RoleCreateInfo roleCreateInfo) {
        this.roleCreateInfo = roleCreateInfo;
    }

    @Override
    public short getPacketId() {
        return PacketId.CREATE_ROLE_RESP;
    }
}
