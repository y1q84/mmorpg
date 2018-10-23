package com.framework.commnunication.server.websocket;

import com.framework.commnunication.server.websocket.handler.DispatchHandler;
import com.framework.commnunication.server.websocket.handler.GameWebSocketServerInboundHandler;
import com.framework.commnunication.server.websocket.handler.WebSocketServerCodecHandler;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.EventLoopGroup;
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
import org.springframework.stereotype.Component;

@Component
public class GameWebSocketServer {

    private static Logger logger= LoggerFactory.getLogger(GameWebSocketServer.class);

    @Autowired
    private GameWebSocketServerInboundHandler gameWebSocketServerInboundHandler;

    @Autowired
    private DispatchHandler dispatchHandler;

    @Autowired
    private WebSocketServerCodecHandler webSocketServerCodecHandler;

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
                            ch.pipeline().addLast("protocolHandler",new WebSocketServerProtocolHandler("/ws"));//protocolHandler处理使得传递到下一个handler的时候是一个完整的数据包
                            ch.pipeline().addLast("webSocketServerCodecHandler", webSocketServerCodecHandler);
                            ch.pipeline().addLast("webSocketServerHandler", gameWebSocketServerInboundHandler);
                            ch.pipeline().addLast("dispatchHandler",dispatchHandler);
                        }
                    });

            ChannelFuture f = bootstrapToClient.bind(8085).sync();

            logger.info("服务端启动成功...");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        GameWebSocketServer gwss=ac.getBean(GameWebSocketServer.class);
        gwss.start();
    }
}
