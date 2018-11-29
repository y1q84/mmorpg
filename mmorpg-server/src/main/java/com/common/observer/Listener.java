package com.common.observer;

/**
 * 监听者
 */
public class Listener<L> {
    private L listener;

    public Listener(L listener){
        this.listener=listener;
    }

    public L getL() {
        return listener;
    }

    public void setL(L l) {
        this.listener = l;
    }
}
