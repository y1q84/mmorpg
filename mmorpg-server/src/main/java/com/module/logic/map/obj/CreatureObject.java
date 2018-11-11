package com.module.logic.map.obj;

/**
 * 生物对象
 */
public class CreatureObject extends MapObject {
    //等级
    private int level;
    //血量
    private int hp;
    //经验
    private int exp;

    //观察者列表
    KnownList knownList;

    public void updateKnownList(CreatureObject creatureObject){
        getKnownList().addKnown(creatureObject);
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

    public KnownList getKnownList() {
        return knownList;
    }

    public void setKnownList(KnownList knownList) {
        this.knownList = knownList;
    }
}
