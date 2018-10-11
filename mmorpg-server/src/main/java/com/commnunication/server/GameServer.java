package com.commnunication.server;

import com.ServerStart;
import com.commnunication.server.handler.ServerHandler;
import com.common.codc.RequestDecoder;
import com.common.codc.ResponseEncoder;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
public class GameServer {

    private static Logger logger= LoggerFactory.getLogger(ServerStart.class);

    public static void start(){
        //服务类
        ServerBootstrap bootstrap = new ServerBootstrap();

        EventLoopGroup boss=null;
        EventLoopGroup worker=null;
        try{

            boss=new NioEventLoopGroup();
            worker=new NioEventLoopGroup();

            bootstrap.group(boss, worker).channel(NioServerSocketChannel.class)
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception {
                            ChannelPipeline pipeline = ch.pipeline();
                            pipeline.addLast("decoder", new RequestDecoder());
                            pipeline.addLast("encoder", new ResponseEncoder());
                            pipeline.addLast("serverHandler", new ServerHandler());
                        }
                    })
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE, true);

            ChannelFuture f = bootstrap.bind(12345).sync();

            logger.info("服务器启动成功...");

        }catch (Exception e){
            e.printStackTrace();
        }

    }

}
