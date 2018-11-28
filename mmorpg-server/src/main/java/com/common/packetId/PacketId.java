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

    private static BiMap<Short , AbstractPacket> packetId2AbstractPacket= HashBiMap.create();
    private static Map<Short, Codec> packetId2Codec=new HashMap<>();

    /**请求登录**/
    public static final short LOGIN_REQ=10001;
    /**响应登录*/
    public static final short LOGIN_RESP=10002;
    /**登录验证**/
    public static final short LOGIN_AUTH_REQ=10003;
    /**请求注册账号**/
    public static final short REGISTER_REQ=10004;
    /**响应注册账号**/
    public static final short REGISTER_RESP=10005;
    /**请求创建角色**/
    public static final short CREATE_ROLE_REQ=10010;
    /**响应创建角色**/
    public static final short CREATE_ROLE_RESP=10011;
    /**请求角色登录**/
    public static final short ROLE_LOGIN_REQ=10012;
    /**响应角色登录**/
    public static final short ROLE_LOGIN_RESP=10013;
    /**响应将角色挤下线**/
    public static final short REMOVE_ROLE_RESP=10014;
    /**请求进入场景**/
    public static final short ENTER_WORLD_REQ=10020;
    /**响应进入场景**/
    public static final short ENTER_WORLD_RESP=10021;
    /**广播玩家场景信息**/
    public static final short BROADCAST_SCENE_RESP=10022;
    /**请求切换场景**/
    public static final short CHANGE_SCENE_REQ=10023;
    /**响应切换场景**/
    public static final short CHANGE_SCENE_RESP=10024;


    /**请求命令**/
    public static final short COMMAND_REQ=10201;
    /**响应**/
    public static final short COMMAND_RESP=10202;

    /**请求移动命令**/
    public static final short MOVE_COMMAND_REQ=10301;
    /**响应移动命令**/
    public static final short MOVE_COMMAND_RESP=10302;

    //添加packetId————>请求包的映射
    public void registerpacketId2AbstractPacket(AbstractPacket abstractPacket){

        packetId2AbstractPacket.put(abstractPacket.getPacketId(), abstractPacket);
    }

    //添加packetId—————>Jprotobuf的编解码器
    public void registerPacketId2Codec(AbstractPacket abstractPacket){

        packetId2Codec.put(abstractPacket.getPacketId(), ProtobufProxy.create(abstractPacket.getClass()));

    }

    public static AbstractPacket getAbstractPacket(short packetId){
        return packetId2AbstractPacket.get(packetId);
    }

    public static Codec getCodec(short packetId) {
        return packetId2Codec.get(packetId);
    }
}
