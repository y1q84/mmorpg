package com.communication.communicateWithBrowser;

import com.communication.communicateWithBrowser.handler.ServerToBrowserHandler;
import org.jboss.netty.bootstrap.ServerBootstrap;
import org.jboss.netty.channel.ChannelPipeline;
import org.jboss.netty.channel.ChannelPipelineFactory;
import org.jboss.netty.channel.Channels;
import org.jboss.netty.channel.socket.nio.NioServerSocketChannelFactory;
import org.jboss.netty.handler.codec.string.StringDecoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.net.InetSocketAddress;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

@Service
public class ServerToBrowser {

    @Autowired
    private ServerToBrowserHandler serverToBrowserHandler;

    public  void start(){
        ServerBootstrap bootstrapToClient = new ServerBootstrap();

        ExecutorService boss = Executors.newCachedThreadPool();
        ExecutorService worker = Executors.newCachedThreadPool();

        bootstrapToClient.setFactory(new NioServerSocketChannelFactory(boss, worker));

        bootstrapToClient.setPipelineFactory(new ChannelPipelineFactory() {

            @Override
            public ChannelPipeline getPipeline() throws Exception {

                ChannelPipeline pipeline = Channels.pipeline();
                pipeline.addLast("decoder", new StringDecoder());
                pipeline.addLast("encoder", new StringDecoder());
                pipeline.addLast("serverHandler", serverToBrowserHandler);
                return pipeline;
            }
        });

        bootstrapToClient.bind(new InetSocketAddress(11111));

        System.out.println("服务端启动成功...");
    }
}
