package com.common.observer;

import org.apache.commons.lang3.event.EventListenerSupport;

/**
 * 监听事件产生器
 */
public class ListenerSupport<T> {
    private EventListenerSupport<T> eventListenerSupport;

    public ListenerSupport(Class<T> listenerEvent){
        this.eventListenerSupport=EventListenerSupport.create(listenerEvent);
    }

    /**
     * 添加观察者
     * @param listener 观察者
     */
    public <L extends T> Listener<L> attachEvent(L listener){
        eventListenerSupport.addListener(listener);
        Listener l=new Listener(listener);
        return l;
    }

    /**
     * 触发事件
     * @return 事件代理
     */
    public T fire(){
        return eventListenerSupport.fire();
    }

    public EventListenerSupport<T> getEventListenerSupport() {
        return eventListenerSupport;
    }

    public void setEventListenerSupport(EventListenerSupport<T> eventListenerSupport) {
        this.eventListenerSupport = eventListenerSupport;
    }
}
