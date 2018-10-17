package com.common.packetId;

import com.baidu.bjf.remoting.protobuf.Codec;
import com.baidu.bjf.remoting.protobuf.ProtobufProxy;
import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class PacketId {

    private static BiMap<Short ,AbstractPaket> packetId2AbstractPacket= HashBiMap.create();
    private static Map<Short, Codec> packetId2Codec=new HashMap<>();

    /**请求登录**/
    public static final short LOGIN_REQ=10001;


    /**请求命令**/
    public static final short COMMAND_REQ=10201;
    /**响应**/
    public static final short COMMAND_RESP=10202;

    /**请求移动命令**/
    public static final short MOVE_COMMAND_REQ=10301;
    /**响应移动命令**/
    public static final short MOVE_COMMAND_RESP=10302;

    //添加packetId————>请求包的映射
    public void registerpacketId2AbstractPacket(AbstractPaket abstractPaket){

        packetId2AbstractPacket.put(abstractPaket.getPacketId(),abstractPaket);
    }

    //添加packetId—————>Jprotobuf的编解码器
    public void registerPacketId2Codec(AbstractPaket abstractPaket){

        packetId2Codec.put(abstractPaket.getPacketId(), ProtobufProxy.create(abstractPaket.getClass()));

    }

    public static AbstractPaket getAbstractPacket(short packetId){
        return packetId2AbstractPacket.get(packetId);
    }

    public static Codec getCodec(short packetId) {
        return packetId2Codec.get(packetId);
    }
}
