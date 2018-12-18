package com.module.logic.goods.type;

public enum ContainerType {
    Backpack("背包",0,500),
    Equipment("装备",501,1000),
    Warehouse("仓库",1001,1500);

    private String desc;
    private int start;
    private int end;

    private ContainerType(String desc, int start, int end){
        this.desc=desc;
        this.start=start;
        this.end=end;
    }

    //判断物品是否在对应的类型范围之内
    public boolean isInTheRange(int position){
        return position>=this.start&&position<=end;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getEnd() {
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }
}
