package com.communication.communicateWithBrowser.handler;

import com.module.logic.gm.manager.GMManager;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 消息接受处理类
 */
@Component
public class ServerToBrowserHandler extends SimpleChannelInboundHandler {

	private static Logger logger= LoggerFactory.getLogger(ServerToBrowserHandler.class);

	@Autowired
	private GMManager gmManager;

	@Override
	protected void channelRead0(io.netty.channel.ChannelHandlerContext ctx, Object msg) throws Exception {
		logger.info("接受到消息...");

		//此处应该有将数据解析，接着进行封装操作
		String message=msg.toString();
		System.out.println("接收从浏览器发过来的消息为："+message);

		//如这里传过来的是一种命令则通过命令管理器进行处理
		gmManager.dealWithCommand(message);
	}

	@Override
	public void channelActive(ChannelHandlerContext ctx) throws Exception {
		ctx.fireChannelActive();
		logger.info("连接成功...");
	}

	@Override
	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
		ctx.fireChannelInactive();
		logger.info("连接断开...");
	}

}
