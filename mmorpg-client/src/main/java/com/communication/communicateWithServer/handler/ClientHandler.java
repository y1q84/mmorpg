package com.communication.communicateWithServer.handler;

import com.common.model.Response;
import com.module.player.packet.PlayerLoginResponse;
import io.netty.channel.SimpleChannelInboundHandler;
import org.springframework.stereotype.Service;

/**
 * 消息接受处理类
 *
 */
@Service
public class ClientHandler extends SimpleChannelInboundHandler {

	@Override
	protected void channelRead0(io.netty.channel.ChannelHandlerContext ctx, Object msg) throws Exception {
		Response message = (Response)msg;

		if(message.getModule() == 1){

			if(message.getCmd() == 1){

				//服务端返回的信息
				byte[] bytes=message.getData();
				System.out.println(new String(bytes));

			}else if(message.getCmd() == 2){

				PlayerLoginResponse playerLoginResponse=new PlayerLoginResponse();
				playerLoginResponse.readFromBytes(message.getData());

				System.out.println("登录成功奖励金币："+playerLoginResponse.getMoney());

			}

		}else if (message.getModule() != 1){


		}
	}
}
