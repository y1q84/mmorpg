package com.module.logic.skill.resource;

import com.common.resource.annotation.Id;

public class SkillResource {

    @Id
    private int id;//不同技能的唯一标识
    private int skillId;
    private String skillName;
    private int level;
    private int consumeMp;
    private int cd;//冷却
    private int damage;
    // TODO 技能升级、升级消耗


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSkillId() {
        return skillId;
    }

    public void setSkillId(int skillId) {
        this.skillId = skillId;
    }

    public String getSkillName() {
        return skillName;
    }

    public void setSkillName(String skillName) {
        this.skillName = skillName;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public int getConsumeMp() {
        return consumeMp;
    }

    public void setConsumeMp(int consumeMp) {
        this.consumeMp = consumeMp;
    }

    public int getCd() {
        return cd;
    }

    public void setCd(int cd) {
        this.cd = cd;
    }

    public int getDamage() {
        return damage;
    }

    public void setDamage(int damage) {
        this.damage = damage;
    }
}
