package com.module.logic.chat.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "响应频道聊天")
public class RespChatWithOtherPacket extends AbstractPacket {
    @Protobuf(description = "频道id")
    private int channelId;
    @Protobuf(description = "内容")
    private String content;

    public int getChannelId() {
        return channelId;
    }

    public void setChannelId(int channelId) {
        this.channelId = channelId;
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
