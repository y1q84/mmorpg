package com.module.logic.map.obj;

import com.module.logic.skill.resource.SkillResource;

import java.util.HashMap;
import java.util.Map;
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
    //蓝量
    private int mp;
    //经验
    private int exp;
    //判断生物是否已在场景里面
    private AtomicBoolean isInTheWorld = new AtomicBoolean(false);
    //观察者列表
    KnownList knownList;
    //生物状态：生存->1，死亡->0
    private int status;

    //需要注意的是这是一个单例类，里面的共享变量是被共享的，
    //多个玩家共用同一个skillCD肯定是有问题的，应该作为玩家的属性比较合理
    //技能id与技能冷却时间的映射
    private Map<Integer,Long> skillCD=new HashMap<>();
    private AtomicBoolean isIncreaseMp=new AtomicBoolean(true);

    //设置对应技能的冷却时间
    public void addCoolDown(SkillResource skillResource){
        skillCD.put(skillResource.getSkillId(),System.currentTimeMillis()+skillResource.getCd());
    }
    //判断是否冷却超时，技能可用
    public boolean isCanUseSkill(SkillResource skillResource){
        int skillId=skillResource.getSkillId();
        //判断skillCD是否为空
        if(skillCD.size()<=0){
            return true;
        }
        //判断集合中是否存在该种技能
        System.out.println("技能id对应的技能："+skillCD.get(skillId));
        Long cd=skillCD.get(skillId);
        if(cd==null){
            return true;
        }
        //是否超时
        if(cd<System.currentTimeMillis()){
            return true;
        }
        return false;
    }

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

    public int getMp() {
        return mp;
    }

    public void setMp(int mp) {
        this.mp = mp;
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

    public Map<Integer, Long> getSkillCD() {
        return skillCD;
    }

    public void setSkillCD(Map<Integer, Long> skillCD) {
        this.skillCD = skillCD;
    }

    public AtomicBoolean getIsIncreaseMp() {
        return isIncreaseMp;
    }

    public void setIsIncreaseMp(AtomicBoolean isIncreaseMp) {
        this.isIncreaseMp = isIncreaseMp;
    }

}
