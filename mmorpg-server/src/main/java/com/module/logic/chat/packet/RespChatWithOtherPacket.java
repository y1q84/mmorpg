package com.module.logic.chat.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应频道聊天")
public class RespChatWithOtherPacket extends AbstractPacket {
    @Protobuf(description = "玩家id")
    private long playerId;
    @Protobuf(description = "频道id")
    private int channelId;
    @Protobuf(description="生物id")
    private long creatureId;
    @Protobuf(description = "内容")
    private String content;

    public long getPlayerId() {
        return playerId;
    }

    public void setPlayerId(long playerId) {
        this.playerId = playerId;
    }

    public int getChannelId() {
        return channelId;
    }

    public void setChannelId(int channelId) {
        this.channelId = channelId;
    }

    public long getCreatureId() {
        return creatureId;
    }

    public void setCreatureId(long creatureId) {
        this.creatureId = creatureId;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public short getPacketId() {
        return PacketId.SEND_CHAT_RESP;
    }
}
