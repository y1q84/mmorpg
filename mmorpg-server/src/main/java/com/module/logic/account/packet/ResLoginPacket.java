package com.module.logic.account.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.account.packet.vo.PlayerEntityInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@DescriptePacket(description = "返回登录结果")
public class ResLoginPacket  extends AbstractPacket {

    @Protobuf(description = "登录结果")
    private String result;
    @Protobuf(description = "玩家角色列表")
    private List<PlayerEntityInfo> playerEntityInfos;

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public List<PlayerEntityInfo> getPlayerEntityInfos() {
        return playerEntityInfos;
    }

    public void setPlayerEntityInfos(List<PlayerEntityInfo> playerEntityInfos) {
        this.playerEntityInfos = playerEntityInfos;
    }

    @Override
    public short getPacketId() {
        return PacketId.LOGIN_RESP;
    }
}