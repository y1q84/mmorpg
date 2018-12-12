package com.framework.commnunication.server.websocket.handler;

import com.common.annotation.WsClass;
import com.common.annotation.WsMethod;
import com.common.packetId.AbstractPacket;
import com.common.session.Constants;
import com.common.session.Session;
import com.common.thread.DispatchHandlerExecutor;
import com.common.thread.DispatchTask;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.util.Attribute;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

import java.lang.annotation.Annotation;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

/**将消息分发处理器**/
@ChannelHandler.Sharable
@Component
public class DispatchHandler extends SimpleChannelInboundHandler implements BeanPostProcessor {

    Logger logger=LoggerFactory.getLogger(DispatchHandler.class);

    private static Map<Class<? extends AbstractPacket>,Object> packet2Bean = new HashMap<>();
    private static Map<Class<? extends AbstractPacket>,Method> packet2Method = new HashMap<>();

    @Autowired
    private DispatchHandlerExecutor dispatchHandlerExecutor;


    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        logger.info("=======进入DispatchHandler的类了=============");

        //ctx可以获取到channel
        Channel channel=ctx.channel();
        execMessage(channel,msg);

    }

    //执行消息
    public void execMessage(Channel channel,Object msg){
        Object bean=packet2Bean.get(msg.getClass());
        Method method=packet2Method.get(msg.getClass());

        dispatchHandlerExecutor.submit(new DispatchTask() {
            //取出session
            Attribute<Session> sessionAttribute=channel.attr(Constants.SESSION_ATTRIBUTE_KEY);
            Session session=sessionAttribute.get();
            @Override
            public String getHashString() {
                return String.valueOf(session.getId());
            }

            @Override
            public void run() {
                try{

                    method.invoke(bean,session,msg);

                }catch (Exception e){
                    e.printStackTrace();
                    logger.error("消息处理失败...");
                }
            }
        });

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

//                    logger.info("spring中的bean初始化完成之后调用，bean对象为："+bean.getClass().getName());
//                    logger.info("spring中的bean初始化完成之后调用，对应方法为："+method.getName());

                }else{
                    continue;
                }
            }
        }

        return bean;
    }

    @Override
    public Object postProcessAfterInitialization(Object bean, String name) throws BeansException {
//        logger.info("传进来的bean"+bean.getClass().getName());

        return bean;
    }

}
