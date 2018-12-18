package com.module.logic.goods.packet;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.common.annotation.DescriptePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
@DescriptePacket(description = "")
public class ReqAddPlayerGoodsPacket extends AbstractPacket{
    
    @Protobuf(description = "物品id")
    private long playerGoodsId ;
    
    @Autowired
    PacketId packetId;

    public long getPlayerGoodsId() {
        return playerGoodsId;
    }

    public void setPlayerGoodsId(long playerGoodsId) {
        this.playerGoodsId = playerGoodsId;
    }

    @Override
    public short getPacketId(){
        return packetId.ADD_PLAYER_GOODS_REQ;
    }
}

