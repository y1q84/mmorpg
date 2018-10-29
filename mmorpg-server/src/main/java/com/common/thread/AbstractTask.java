package com.common.thread;

public interface AbstractTask extends Runnable {

    int getDispatchHashCode();
}
