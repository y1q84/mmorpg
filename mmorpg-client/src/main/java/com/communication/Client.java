package com.communication;

import java.net.InetSocketAddress;
import java.util.Scanner;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

import com.common.codc.RequestEncoder;
import com.common.codc.ResponseDecoder;
import com.communication.handler.ClientHandler;
import com.module.player.packet.PlayerLoginRequest;
import com.common.model.Request;
import org.jboss.netty.bootstrap.ClientBootstrap;
import org.jboss.netty.channel.Channel;
import org.jboss.netty.channel.ChannelFuture;
import org.jboss.netty.channel.ChannelPipeline;
import org.jboss.netty.channel.ChannelPipelineFactory;
import org.jboss.netty.channel.Channels;
import org.jboss.netty.channel.socket.nio.NioClientSocketChannelFactory;
import org.springframework.stereotype.Service;

/**
 * 客户端
 *
 */

@Service
public class Client {

    public static void clientStart(){
        //服务类
        ClientBootstrap bootstrap = new  ClientBootstrap();

        //线程池
        ExecutorService boss = Executors.newCachedThreadPool();
        ExecutorService worker = Executors.newCachedThreadPool();

        //socket工厂
        bootstrap.setFactory(new NioClientSocketChannelFactory(boss, worker));

        //管道工厂
        bootstrap.setPipelineFactory(new ChannelPipelineFactory() {

            @Override
            public ChannelPipeline getPipeline() throws Exception {
                ChannelPipeline pipeline = Channels.pipeline();
                pipeline.addLast("decoder", new ResponseDecoder());
                pipeline.addLast("encoder", new RequestEncoder());
                pipeline.addLast("clientHandler", new ClientHandler());
                return pipeline;
            }
        });

        //连接服务端
        ChannelFuture connect = bootstrap.connect(new InetSocketAddress("127.0.0.1", 12345));
        Channel channel = null;
        try {
            channel = connect.sync().getChannel();
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("client start");

        Scanner scanner = new Scanner(System.in);
        while(true){

            System.out.println("请输入玩家id:");
            long playerId=Long.parseLong(scanner.nextLine());
            System.out.println("请输入密码：");
            String pass=scanner.nextLine();

            PlayerLoginRequest playerLoginRequest=new PlayerLoginRequest();
            playerLoginRequest.setPlayerId(playerId);
            playerLoginRequest.setPass(pass);

            //将数据封装
            Request request=new Request();
            request.setModule((short)1);
            request.setCmd((short)2);
            request.setData(playerLoginRequest.getBytes());
            //发送请求
            channel.write(request);
        }
    }

}

