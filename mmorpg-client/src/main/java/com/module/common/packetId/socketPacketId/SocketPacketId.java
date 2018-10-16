package com.module.common.packetId.socketPacketId;

import com.google.common.collect.BiMap;
import com.google.common.collect.HashBiMap;

public class SocketPacketId {

    private BiMap<Short ,Class> packetId2Request= HashBiMap.create();

    /***请求登录**/
    public static final short REQ_LOGIN = 10001;
    /**响应登录**/
    public static final short RESP_LOGIN = 10002;

     /**请求攻击怪物**/
    public static final short REQ_ATTACK_ENERMY=10101;
    /**响应攻击怪物**/
    public static final short RESP_ATTACK_ENERMY=10102;

    /**请求移动**/
    public static final short REQ_MOVE=10301;
    /**响应移动**/
    public static final short RESP_MOVE=10302;

    public void addPacketId2Request(short packedId,Class clazz){
        Class clazzReturn = packetId2Request.putIfAbsent(packedId,clazz);
        if (clazzReturn!=null){
            throw new RuntimeException(String.format("packetId[%d]重复,同时被class[%s]和class[%s]",packedId,clazzReturn,clazz));

        }
    }

    public BiMap<Short, Class> getPacketId2Request() {
        return packetId2Request;
    }

}
