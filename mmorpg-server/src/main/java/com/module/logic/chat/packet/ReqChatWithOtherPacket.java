package com.module.logic.chat.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "请求发送聊天")
public class ReqChatWithOtherPacket extends AbstractPacket {
    @Protobuf(description = "聊天内容")
    private String content;

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public short getPacketId() {
        return PacketId.SEND_CHAT_REQ;
    }
}
