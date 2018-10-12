package com.commnunication.server.handler;

import com.common.model.Request;
import com.common.model.Response;
import com.common.model.StateCode;
import com.module.player.packet.PlayerLoginRequest;
import com.module.player.packet.PlayerLoginResponse;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

/**
 * 消息接受处理类
 */
@Component
public class ServerHandler extends SimpleChannelInboundHandler{

	private static Logger logger= LoggerFactory.getLogger(ServerHandler.class);
	/**
	 * 接收消息
	 */

	@Override
	protected void channelRead0(io.netty.channel.ChannelHandlerContext ctx, Object msg) throws Exception {
		Request message = (Request)msg;

		if(message.getModule() == 1){

			if(message.getCmd() == 1){
				String content=new String(message.getData());
				System.out.println("客户端发送过来的命令目标位置为："+content);

				Response response=new Response();
				response.setModule((short)1);
				response.setCmd((short)1);
				response.setStateCode(StateCode.SUCCESS);
				response.setData("成功进入场景...".getBytes());
				ctx.channel().writeAndFlush(response);
				response.setData("场景内有：猪，狗，牛，羊".getBytes());
				ctx.channel().writeAndFlush(response);

			}else if(message.getCmd() == 2){
				PlayerLoginRequest playerLoginRequest=new PlayerLoginRequest();
				playerLoginRequest.readFromBytes(message.getData());
				//输出获取的数据
				System.out.println("玩家id"+playerLoginRequest.getPlayerId()+"\t密码："+playerLoginRequest.getPass());

				PlayerLoginResponse playerLoginResponse=new PlayerLoginResponse();
				playerLoginResponse.setMoney(1111);

				//回写数据
				Response response=new Response();
				response.setModule((short)1);
				response.setCmd((short)2);
				response.setStateCode(StateCode.SUCCESS);
				response.setData(playerLoginResponse.getBytes());

				//发送数据
				ctx.channel().writeAndFlush(response);

			}

		}else if (message.getModule() != 1){


		}
	}

	@Override
	public void channelActive(io.netty.channel.ChannelHandlerContext ctx) throws Exception {
		ctx.fireChannelActive();
		logger.info("客户端连接进来...");
	}

	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
		ctx.fireChannelInactive();
		ctx.channel().writeAndFlush("break");
		logger.info("客户端断开...");
	}
}
