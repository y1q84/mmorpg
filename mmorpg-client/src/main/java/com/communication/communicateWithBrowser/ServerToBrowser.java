package com.communication.communicateWithBrowser;

import com.communication.communicateWithBrowser.handler.ServerToBrowserHandler;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.DelimiterBasedFrameDecoder;
import io.netty.handler.codec.Delimiters;
import io.netty.handler.codec.string.StringDecoder;
import io.netty.handler.logging.LoggingHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ServerToBrowser {

    private static Logger logger= LoggerFactory.getLogger(ServerToBrowser.class);

    @Autowired
    private ServerToBrowserHandler serverToBrowserHandler;

    public  void start(){
        ServerBootstrap bootstrapToClient = new ServerBootstrap();

        EventLoopGroup boss=null;
        EventLoopGroup worker=null;

        try{

            boss=new NioEventLoopGroup();
            worker=new NioEventLoopGroup();

            bootstrapToClient.group(boss, worker).channel(NioServerSocketChannel.class)
                    .handler(new LoggingHandler())
                    .childHandler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        public void initChannel(SocketChannel ch) throws Exception {
                            ChannelPipeline pipeline =ch.pipeline();
                            pipeline.addLast("framer", new DelimiterBasedFrameDecoder(2048, Delimiters.lineDelimiter()));
                            pipeline.addLast("decoder", new io.netty.handler.codec.string.StringDecoder());
                            pipeline.addLast("encoder", new StringDecoder());
                            pipeline.addLast("serverHandler", serverToBrowserHandler);
                        }
                    })
                    .option(ChannelOption.SO_BACKLOG, 128)
                    .childOption(ChannelOption.SO_KEEPALIVE, true);

            ChannelFuture f = bootstrapToClient.bind(11111).sync();

            logger.info("communicateWithBrowser端启动成功...");

        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
