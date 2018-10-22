package com.framework.commnunication.server.websocket.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.packetId.AbstractPaket;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

@ChannelHandler.Sharable
@Component
public class DispatchHandler extends SimpleChannelInboundHandler implements BeanPostProcessor {

    Logger logger=LoggerFactory.getLogger(DispatchHandler.class);

    //private static Map<Short, BeanAndMethodPack> packetId2BeanAndMethodPack=new HashMap<>();

    private static Map<Class<? extends AbstractPaket>,Object> packet2Bean = new HashMap<>();
    private static Map<Class<? extends AbstractPaket>,Method> packet2Method = new HashMap<>();


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        logger.info("=======进入DispatchHandler的类了=============");

        //AbstractPacket的具体子类有对应的PacketId
        //ctx可以获取到channel
        Channel channel=ctx.channel();
        execMessage(channel,msg);



//        BeanAndMethodPack beanAndMethodPack=packetId2BeanAndMethodPack.get(((AbstractPaket)msg).getPacketId());
//        logger.info("对应的bean类为："+beanAndMethodPack.getBean().getClass().getName());
//        logger.info("对应的方法为："+beanAndMethodPack.getMethod());
//        beanAndMethodPack.execute(channel,msg);

    }

    //执行消息
    public void execMessage(Channel channel,Object msg){
        Object bean=packet2Bean.get(msg.getClass());
        Method method=packet2Method.get(msg.getClass());
        try{

            method.invoke(bean,channel,msg);

        }catch (Exception e){
            e.printStackTrace();
            logger.error("消息处理失败...");
        }
    }

    @Override
    public Object postProcessBeforeInitialization(Object bean, String name) throws BeansException {

        Class<?> clazz=bean.getClass();
        //上面的
        //获取带有WsClass注解的类
        Annotation annotation=clazz.getAnnotation(WsClass.class);
        //扫描所有带有WsClass这个注解的类
        if(annotation!=null){
            for(Method method:clazz.getMethods()){
                Annotation anno=method.getAnnotation(WsMethod.class);
                if(anno!=null){

                    Class<?>[] classes=method.getParameterTypes();
                    //第二个参数应该为具体的请求
                    Class cla=classes[1];
                    packet2Bean.put(cla,bean);
                    packet2Method.put(cla,method);

                    logger.info("spring中的bean初始化完成之后调用，bean对象为："+bean.getClass().getName());
                    logger.info("spring中的bean初始化完成之后调用，对应方法为："+method.getName());

//                    Annotation annotat=classes[1].getAnnotation(WsPacket.class);
//                    if(annotat==null){
//                        throw new IllegalArgumentException(bean.getClass().getName()+"类中的方法"+method.getName()+"的第二个参数必须有WsMetho的注解");
//                    }
//
//                    Annotation at=classes[1].getAnnotation(WsPacket.class);
//                    short packetId=((WsPacket) at).packetId();
                    //将packetId与BeanAndMethod放进集合
                   // packetId2BeanAndMethodPack.put(packetId,BeanAndMethodPack.valueOf(bean,method));

                }else{
                    continue;
                }
            }
        }

        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String name) throws BeansException {
        logger.info("传进来的bean"+bean.getClass().getName());

        return bean;
    }

//    public static BeanAndMethodPack getBeanAndMethodPack(short packetId) {
//        return packetId2BeanAndMethodPack.get(packetId);
//    }
}
