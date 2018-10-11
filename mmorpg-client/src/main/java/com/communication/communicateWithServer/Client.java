package com.communication.communicateWithServer;

import com.common.codc.RequestEncoder;
import com.common.codc.ResponseDecoder;
import com.common.model.Request;
import com.communication.communicateWithServer.handler.ClientHandler;
import com.module.player.packet.PlayerLoginRequest;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.*;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import org.springframework.stereotype.Component;

import java.util.Scanner;

//
///**
// * 客户端
// *
// */
@Component
public class Client {

    private static Channel channel;

    public Channel getChannel(){
        return channel;
    }

    public static void clientStart(){
        Bootstrap bootstrapToServer = new Bootstrap();

        EventLoopGroup boss=null;
        EventLoopGroup worker=null;

        try{
            boss=new NioEventLoopGroup();
            worker=new NioEventLoopGroup();

            bootstrapToServer.group(worker)
                    .channel(NioSocketChannel.class)
                    .option(ChannelOption.SO_KEEPALIVE, true)
                    .handler(new ChannelInitializer<SocketChannel>(){

                        @Override
                        protected void initChannel(SocketChannel ch) throws Exception {
                            ch.pipeline().addLast("decoder", new ResponseDecoder());
                            ch.pipeline().addLast("encoder", new RequestEncoder());
                            ch.pipeline().addLast("clientHandler", new ClientHandler());
                        }
                    });
            ChannelFuture f=bootstrapToServer.connect("127.0.0.1", 12345).sync();

            channel=f.channel();

            System.out.println("客户端启动成功...");

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
                channel.writeAndFlush(request);
            }

        }catch (Exception e){
            e.printStackTrace();

        }
    }

    public static void main(String[] args) {
        ClientForNetty4 clientForNetty4=new ClientForNetty4();
        clientForNetty4.clientStart();
    }

}

