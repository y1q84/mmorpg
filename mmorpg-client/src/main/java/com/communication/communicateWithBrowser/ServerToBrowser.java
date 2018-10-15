package com.communication.communicateWithBrowser;

import com.communication.communicateWithBrowser.handler.ServerToBrowserHandler;
import com.communication.communicateWithBrowser.handler.WebSocketServerHandler;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioServerSocketChannel;
import io.netty.handler.codec.http.HttpObjectAggregator;
import io.netty.handler.codec.http.HttpServerCodec;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import io.netty.handler.logging.LoggingHandler;
import io.netty.handler.stream.ChunkedWriteHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
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
                            ch.pipeline().addLast("http-codec", new HttpServerCodec());
                            ch.pipeline().addLast("aggregator", new HttpObjectAggregator(65536));
                            ch.pipeline().addLast("http-chunked", new ChunkedWriteHandler());
                            ch.pipeline().addLast("protocolHandler",new WebSocketServerProtocolHandler("/ws"));
                            ch.pipeline().addLast("webSocketServerHandler", serverToBrowserHandler);
                        }
                    });

            ChannelFuture f = bootstrapToClient.bind(8085).sync();

            logger.info("communicateWithBrowser端启动成功...");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {

        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        WebSocketServer server=ac.getBean(WebSocketServer.class);
        server.start();
    }
}
