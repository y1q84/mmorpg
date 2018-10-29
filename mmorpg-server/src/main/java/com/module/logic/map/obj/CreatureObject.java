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
}
