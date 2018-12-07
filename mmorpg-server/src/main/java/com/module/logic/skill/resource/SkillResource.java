package com.module.logic.skill.resource;

import com.common.resource.annotation.Id;

public class SkillResource {

    @Id
    private int id;//不同技能的唯一标识
    private int skillId;
    private int level;
    private String consume;
    private int cd;//冷却
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

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getConsume() {
        return consume;
    }

    public void setConsume(String consume) {
        this.consume = consume;
    }

    public int getCd() {
        return cd;
    }

    public void setCd(int cd) {
        this.cd = cd;
    }
}
