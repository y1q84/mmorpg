package com.module.logic.map.obj;

import java.util.concurrent.atomic.AtomicBoolean;

/**
 * 生物对象
 */
public class CreatureObject extends MapObject {

    protected long objectId;
    //等级
    private int level;
    //血量
    private int hp;
    //经验
    private int exp;
    //判断生物是否已在场景里面
    private AtomicBoolean isInTheWorld = new AtomicBoolean(false);
    //观察者列表
    KnownList knownList;
    //生物状态：生存->1，死亡->0
    private int status;

    public void updateKnownList(CreatureObject creatureObject){
        getKnownList().addKnown(creatureObject);
    }

    public long getObjectId() {
        return objectId;
    }

    public void setObjectId(long objectId) {
        this.objectId = objectId;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getHp() {
        return hp;
    }

    public void setHp(int hp) {
        this.hp = hp;
    }

    public int getExp() {
        return exp;
    }

    public void setExp(int exp) {
        this.exp = exp;
    }

    public boolean isInTheWorld() {
        return isInTheWorld.get();
    }

    public void setIsInTheWorld(boolean isInTheWorld) {
        this.isInTheWorld.set(isInTheWorld);
    }

    public KnownList getKnownList() {
        return knownList;
    }

    public void setKnownList(KnownList knownList) {
        this.knownList = knownList;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }
}
