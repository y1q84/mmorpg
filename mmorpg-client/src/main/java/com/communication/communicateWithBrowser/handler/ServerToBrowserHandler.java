package com.communication.communicateWithBrowser.handler;

import com.module.logic.gm.manager.GMManager;
import org.jboss.netty.channel.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**
 * 消息接受处理类
 */
@Component
public class ServerToBrowserHandler extends SimpleChannelHandler {

	private static Logger logger= LoggerFactory.getLogger(ServerToBrowserHandler.class);

	@Autowired
	private GMManager gmManager;

	@Override
	public void messageReceived(ChannelHandlerContext ctx, MessageEvent e) throws Exception {

		logger.info("接受到消息...");

		//此处应该有将数据解析，接着进行封装操作
		String message=e.getMessage().toString();
		System.out.println("接收从浏览器发过来的消息为："+message);

		//如这里传过来的是一种命令则通过命令管理器进行处理
		gmManager.dealWithCommand(message);

	}

	@Override
	public void exceptionCaught(ChannelHandlerContext ctx, ExceptionEvent e) throws Exception {
		logger.info("出现异常...");
		super.exceptionCaught(ctx, e);
	}

	@Override
	public void channelConnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("出现异常...");
		super.channelConnected(ctx, e);

	}

	@Override
	public void channelDisconnected(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("连接关闭...");
		super.channelDisconnected(ctx, e);

	}

	@Override
	public void channelClosed(ChannelHandlerContext ctx, ChannelStateEvent e) throws Exception {
		logger.info("连接关闭...");
		super.channelClosed(ctx, e);

	}

}
