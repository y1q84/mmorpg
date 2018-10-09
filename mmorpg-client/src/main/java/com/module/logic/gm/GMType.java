package com.module.logic.gm;

public enum GMType {

    MOVE(1),
    ATTACK(2);

    private int value;

    private GMType(int value){
        this.value=value;
    }

    public int getValue() {
        return value;
    }

    public void setValue(int value) {
        this.value = value;
    }

    public GMType getType(int value){
        for(GMType type:values()){
            if(type.getValue()==value){
                return type;
            }
        }
        return null;
    }
}
