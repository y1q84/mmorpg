package com.server.handler;

import com.common.model.Request;
import com.common.model.Response;
import com.common.model.StateCode;
import com.module.player.packet.PlayerLoginRequest;
import com.module.player.packet.PlayerLoginResponse;
import org.jboss.netty.channel.ChannelHandlerContext;
import org.jboss.netty.channel.ChannelStateEvent;
import org.jboss.netty.channel.ExceptionEvent;
import org.jboss.netty.channel.MessageEvent;
import org.jboss.netty.channel.SimpleChannelHandler;
import org.springframework.stereotype.Service;

/**
 * 消息接受处理类
 *
 */
@Service
public class ServerHandler extends SimpleChannelHandler {

	/**
	 * 接收消息
	 */
	@Override
	public void messageReceived(ChannelHandlerContext ctx, MessageEvent e) throws Exception {

		Request message = (Request)e.getMessage();
		
		if(message.getModule() == 1){
			
			if(message.getCmd() == 1){

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

				//回写数据
				ctx.getChannel().write(response);

			}
			
		}else if (message.getModule() != 1){
			
			
		}
	}

	/**
	 * 捕获异常
	 */
	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, ExceptionEvent e) throws Exception {
		System.out.println("exceptionCaught");
		super.exceptionCaught(ctx, e);
	}

	/**
	 * 新连接
	 */
	@Override
	public void channelConnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		System.out.println("channelConnected");
		super.channelConnected(ctx, e);
	}

	/**
	 * 必须是链接已经建立，关闭通道的时候才会触发
	 */
	@Override
	public void channelDisconnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		System.out.println("channelDisconnected");
		super.channelDisconnected(ctx, e);
	}

	/**
	 * channel关闭的时候触发
	 */
	@Override
	public void channelClosed(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		System.out.println("channelClosed");
		super.channelClosed(ctx, e);
	}
}
