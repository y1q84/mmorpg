package com.common.observer;

import java.util.HashMap;
import java.util.Map;

/**
 * 监听控制器
 */
public class ListeningController {

    private Map<Class, ListenerSupport<?>> type2Observer=new HashMap<>();

    /**
     * 获取事件代理
     * @param listenerEvent 监听事件
     * @return 事件代理
     */
    public <T> ListenerSupport<T> getListenerSupport(Class<T> listenerEvent){
        ListenerSupport listenerSupport=type2Observer.get(listenerEvent);
        if(listenerSupport==null){
            listenerSupport=new ListenerSupport(listenerEvent);
            type2Observer.put(listenerEvent,listenerSupport);
        }
        return listenerSupport;
    }

    /**
     * 根据对应的监听事件获取事件代理对象，可执行该件的方法
     * @param listenerEvent 监听事件
     * @param <T> 事件接口的泛型类型
     * @return
     */
    public <T> T fire(Class<T> listenerEvent){
        return getListenerSupport(listenerEvent).fire();
    }

    /**
     * 添加观察者
     * @param listenerEvent 监听事件
     * @param listener 观察者
     * @param <T> 事件接口
     * @param <L> 观察者
     * @return 观察者
     */
    public <T , L extends T>Listener<L>  attachEvent(Class<T> listenerEvent,L listener){
        return getListenerSupport(listenerEvent).attachEvent(listener);
    }
}
