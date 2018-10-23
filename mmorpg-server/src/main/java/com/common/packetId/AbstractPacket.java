package com.common.packetId;

import com.common.util.ProtoFileUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public abstract class AbstractPacket {

    @Autowired
    private PacketId packetId;

    public abstract short getPacketId() ;

    @PostConstruct
    public void init(){
        //创建proto文件
        ProtoFileUtil.creatProtoFile(this);

        packetId.registerpacketId2AbstractPacket(this);
        packetId.registerPacketId2Codec(this);
    }
}
