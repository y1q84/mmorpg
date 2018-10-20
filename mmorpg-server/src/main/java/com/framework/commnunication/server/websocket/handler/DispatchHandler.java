package com.framework.commnunication.server.websocket.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.annotation.WsPacket;
import com.common.pack.BeanAndMethodPack;
import com.common.packetId.AbstractPaket;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@Component
public class DispatchHandler extends SimpleChannelInboundHandler implements BeanPostProcessor {

    private static Map<Short, BeanAndMethodPack> packetId2BeanAndMethodPack=new HashMap<>();


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        //这里的msg就是上面handler往下传递的AbstractPacket
        //AbstractPacket的具体子类有对应的PacketId
        //ctx可以获取到channel
        Channel channel=ctx.channel();
        BeanAndMethodPack beanAndMethodPack=packetId2BeanAndMethodPack.get(((AbstractPaket)msg).getPacketId());
        beanAndMethodPack.execute(channel,msg);

    }

    @Override
    public Object postProcessBeforeInitialization(Object o, String s) throws BeansException {
        return null;
    }

    @Override
    public Object postProcessAfterInitialization(Object o, String s) throws BeansException {

        Class<?> clazz=o.getClass();
        //获取带有WsClass注解的类
        Annotation annotation=clazz.getAnnotation(WsClass.class);
        if(annotation!=null){
            for(Method method:clazz.getMethods()){
                Annotation anno=method.getAnnotation(WsMethod.class);
                if(anno!=null){

                    Class<?>[] classes=method.getParameterTypes();
                    //第二个参数应该为具体的请求
                    Annotation annotat=classes[1].getAnnotation(WsPacket.class);
                    if(annotat==null){
                        throw new IllegalArgumentException(o.getClass().getName()+"类中的方法"+method.getName()+"的第二个参数必须有WsMetho的注解");
                    }
                    Annotation at=classes[1].getAnnotation(WsPacket.class);
                    short packetId=((WsPacket) at).packetId();

                    //将packetId与BeanAndMethod放进集合
                    packetId2BeanAndMethodPack.put(packetId,BeanAndMethodPack.valueOf(o,method));

                }else{
                    continue;
                }
            }
        }

        return null;
    }

    public static BeanAndMethodPack getBeanAndMethodPack(short packetId) {
        return packetId2BeanAndMethodPack.get(packetId);
    }
}
