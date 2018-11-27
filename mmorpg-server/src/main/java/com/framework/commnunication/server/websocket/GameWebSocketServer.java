package com.framework.commnunication.server.websocket;

import com.baidu.bjf.remoting.protobuf.ProtobufProxy;
import com.common.util.FileUtil;
import com.framework.commnunication.server.websocket.handler.DispatchHandler;
import com.framework.commnunication.server.websocket.handler.GameWebSocketServerInboundHandler;
import com.framework.commnunication.server.websocket.handler.WebSocketServerCodecHandler;
import com.module.logic.map.born.BornManager;
import io.netty.bootstrap.ServerBootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
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

import java.io.File;
import java.util.logging.Level;

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

            //相当于生产者线程，用来抛出事件
            boss=new NioEventLoopGroup();
            //相当于消费者线程，处理事件
            worker=new NioEventLoopGroup();

            bootstrapToClient.group(boss, worker)
                    .channel(NioServerSocketChannel.class)
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
                    })
                    /**
                     * Channeloption.SO_KEEPALIVE参数对应于套接字选项中的SO_KEEPALIVE，该参数用于设置TCP连接，
                     * 当设置该选项以后，连接会测试链接的状态，这个选项用于可能长时间没有数据交流的连接。
                     * 当设置该选项以后，如果在两小时内没有数据的通信时，TCP会自动发送一个活动探测数据报文
                     */
                    .childOption(ChannelOption.SO_KEEPALIVE,true);

            ChannelFuture f = bootstrapToClient.bind(8085).sync();

            logger.info("服务端启动成功...");

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        java.util.logging.Logger logger=java.util.logging.Logger.getLogger(ProtobufProxy.class.getName());
        logger.setLevel(Level.WARNING);
        //在容器启动之前删除指定目录下的.proto文件
        FileUtil.deleteAllFiles(new File("C:\\mmorpg\\mmorpg\\mmorpg-browser\\mmorpg-browser\\src\\app\\proto\\protofile\\"));
        ApplicationContext ac=new ClassPathXmlApplicationContext("applicationContext.xml");
        BornManager.getInstance().produceAll();
        GameWebSocketServer gwss=ac.getBean(GameWebSocketServer.class);
        gwss.start();
    }
}
