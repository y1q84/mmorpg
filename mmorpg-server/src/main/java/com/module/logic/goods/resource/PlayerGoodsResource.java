package com.module.logic.goods.resource;

public class PlayerGoodsResource {
    private String goodsId;
    private String name;
    private String baseAttr;
    // 最大叠加数限制
    private int maxMergeLimit;
    // 等级限制
    private int minLevelLimit;
    // 次数限制
    private int timesLimit;
    // 性别限制(男女装)
    private int sexLimit;
    // 角色限制(不同角色可穿戴的物品不同)
    private int roleLimit;

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBaseAttr() {
        return baseAttr;
    }

    public void setBaseAttr(String baseAttr) {
        this.baseAttr = baseAttr;
    }

    public int getMaxMergeLimit() {
        return maxMergeLimit;
    }

    public void setMaxMergeLimit(int maxMergeLimit) {
        this.maxMergeLimit = maxMergeLimit;
    }

    public int getMinLevelLimit() {
        return minLevelLimit;
    }

    public void setMinLevelLimit(int minLevelLimit) {
        this.minLevelLimit = minLevelLimit;
    }

    public int getTimesLimit() {
        return timesLimit;
    }

    public void setTimesLimit(int timesLimit) {
        this.timesLimit = timesLimit;
    }

    public int getSexLimit() {
        return sexLimit;
    }

    public void setSexLimit(int sexLimit) {
        this.sexLimit = sexLimit;
    }

    public int getRoleLimit() {
        return roleLimit;
    }

    public void setRoleLimit(int roleLimit) {
        this.roleLimit = roleLimit;
    }
}
