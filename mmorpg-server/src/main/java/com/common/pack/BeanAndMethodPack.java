package com.common.pack;

import io.netty.channel.Channel;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;

public class BeanAndMethodPack {

    private Object bean;
    private Method method;

    public static BeanAndMethodPack valueOf(Object bean,Method method){
        BeanAndMethodPack bamp=new BeanAndMethodPack();
        bamp.setBean(bean);
        bamp.setMethod(method);
        return bamp;
    }

    public Object getBean() {
        return bean;
    }

    public void setBean(Object bean) {
        this.bean = bean;
    }

    public Method getMethod() {
        return method;
    }

    public void setMethod(Method method) {
        this.method = method;
    }


    public Object execute(Channel channel, Object obj){
        try {

            //handler类中的方法XxxMethod(Channel channel,AbstractPacket packet)
            //BeanAndMethodPack beanAndMethodPack=packetId2BeanAndMethodPack.get(((AbstractPaket)msg).getPacketId());
            //反射调用方法
            method.invoke(bean,channel,obj);
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        } catch (InvocationTargetException e) {
            e.printStackTrace();
        }
        return null;
    }
}
