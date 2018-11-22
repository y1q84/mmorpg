package com.module.logic.player.packet.vo;

import com.baidu.bjf.remoting.protobuf.annotation.Protobuf;
import com.module.logic.map.obj.MapObject;
import com.module.logic.monster.resource.Monster;
import com.module.logic.player.Player;

public class ObjectInMapInfo {
    @Protobuf
    private long objectId;
    @Protobuf
    private String objectName;
    @Protobuf
    private int hp;
    @Protobuf
    private int level;
    @Protobuf
    private String objectType;

    public static ObjectInMapInfo valueOf(MapObject mapObject){
        ObjectInMapInfo objectInMapInfo=new ObjectInMapInfo();
        if(mapObject instanceof Player){
            Player player=(Player)mapObject;
            objectInMapInfo.setObjectId(player.getId());
            objectInMapInfo.setObjectName(player.getPlayerEntity().getPlayerName());
            objectInMapInfo.setLevel(player.getLevel());
            objectInMapInfo.setHp(player.getHp());
            objectInMapInfo.setObjectType("PLAYER");
            return objectInMapInfo;
        }else if(mapObject instanceof Monster){
            Monster monster=(Monster)mapObject;
            objectInMapInfo.setObjectId(monster.getId());
            objectInMapInfo.setObjectName(monster.getName());
            objectInMapInfo.setLevel(monster.getLevel());
            objectInMapInfo.setObjectType("MONSTER");
            return objectInMapInfo;
        }
        //TODO 怪物、NPC转为改对象存储发送
        return objectInMapInfo;
    }

    public long getObjectId() {
        return objectId;
    }

    public void setObjectId(long playerId) {
        this.objectId = playerId;
    }

    public String getObjectName() {
        return objectName;
    }

    public void setObjectName(String objectName) {
        this.objectName = objectName;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getObjectType() {
        return objectType;
    }

    public void setObjectType(String objectType) {
        this.objectType = objectType;
    }
}
