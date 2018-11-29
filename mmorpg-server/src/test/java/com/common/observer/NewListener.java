package com.common.observer;

import org.apache.commons.lang3.event.EventListenerSupport;

public class NewListener implements IListener {
    @Override
    public void listen() {
        System.out.println("jelllo");
    }

    public static void main(String[] args) {
        EventListenerSupport<IListener> eventListenerSupport=EventListenerSupport.create(IListener.class);
        eventListenerSupport.addListener(new NewListener());
        eventListenerSupport.fire().listen();
    }
}
