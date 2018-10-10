package com.commnunication.server.handler;

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
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

/**
 * 消息接受处理类
 */
@Service
public class ServerHandler extends SimpleChannelHandler {

	private static Logger logger= LoggerFactory.getLogger(ServerHandler.class);
	/**
	 * 接收消息
	 */
	@Override
	public void messageReceived(ChannelHandlerContext ctx, MessageEvent e) throws Exception {

		Request message = (Request)e.getMessage();
		
		if(message.getModule() == 1){
			
			if(message.getCmd() == 1){
				String content=new String(message.getData());
				System.out.println("客户端发送过来的命令目标位置为："+content);


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
		super.exceptionCaught(ctx, e);
	}

	/**
	 * 新连接
	 */
	@Override
	public void channelConnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("客户端连接进来了...");
		super.channelConnected(ctx, e);

	}

	/**
	 * 必须是链接已经建立，关闭通道的时候才会触发
	 */
	@Override
	public void channelDisconnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("channel连接断开...");
		super.channelDisconnected(ctx, e);
	}

	/**
	 * channel关闭的时候触发
	 */
	@Override
	public void channelClosed(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("channel关闭...");
		super.channelClosed(ctx, e);

	}
}
