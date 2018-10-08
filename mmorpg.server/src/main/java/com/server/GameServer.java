package com.server;

import com.common.codc.RequestDecoder;
import com.common.codc.ResponseEncoder;
import com.server.handler.ServerHandler;
import org.jboss.netty.bootstrap.ServerBootstrap;
import org.jboss.netty.channel.ChannelPipeline;
import org.jboss.netty.channel.ChannelPipelineFactory;
import org.jboss.netty.channel.Channels;
import org.jboss.netty.channel.socket.nio.NioServerSocketChannelFactory;
import org.springframework.stereotype.Service;

import java.net.InetSocketAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service("gameServer")
public class GameServer {

    public static void start(){
        //服务类
        ServerBootstrap bootstrap = new ServerBootstrap();

        //boss线程监听端口，worker线程负责数据读写
        ExecutorService boss = Executors.newCachedThreadPool();
        ExecutorService worker = Executors.newCachedThreadPool();

        //设置niosocket工厂
        bootstrap.setFactory(new NioServerSocketChannelFactory(boss, worker));

        //设置管道的工厂
        bootstrap.setPipelineFactory(new ChannelPipelineFactory() {

            @Override
            public ChannelPipeline getPipeline() throws Exception {

                ChannelPipeline pipeline = Channels.pipeline();
                pipeline.addLast("decoder", new RequestDecoder());
                pipeline.addLast("encoder", new ResponseEncoder());
                pipeline.addLast("serverHandler", new ServerHandler());
                return pipeline;
            }
        });

        bootstrap.bind(new InetSocketAddress(12345));

        System.out.println("start!!!");
    }
}
