package com.common.thread;

public abstract class DispatchTask implements AbstractTask {

    public abstract String getHashString();

    @Override
    public int getDispatchHashCode() {
        /***
         * <<:左移运算符，num << 1,相当于num乘以2
         * >>:右移运算符，num >> 1,相当于num除以2
         * >>>:无符号右移，忽略符号位，空位都以0补齐
         */
        return getHashString().hashCode()>>>15&getHashString().hashCode();
    }
}
