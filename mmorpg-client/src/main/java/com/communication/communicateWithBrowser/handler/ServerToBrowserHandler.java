//package com.communication.communicateWithBrowser.handler;
//
//import com.module.logic.gm.manager.GMManager;
//import io.netty.buffer.ByteBuf;
//import io.netty.channel.Channel;
//import io.netty.channel.ChannelHandlerContext;
//import io.netty.channel.SimpleChannelInboundHandler;
//import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
//import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
//import io.netty.handler.codec.http.websocketx.WebSocketFrame;
//import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Component;
//
///**
// * 消息接受处理类
// */
//@Component
//public class ServerToBrowserHandler extends SimpleChannelInboundHandler<WebSocketFrame> {
//
//	private static Logger logger= LoggerFactory.getLogger(ServerToBrowserHandler.class);
//
//	@Autowired
//	private GMManager gmManager;
//
//	@Override
//	protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame msg) throws Exception {
//
//		logger.info("接收到消息...");
//		Channel channel=ctx.channel();
//		if(msg instanceof TextWebSocketFrame){
//			//此处应该有将数据解析，接着进行封装操作
//			String message=((TextWebSocketFrame) msg).text();
//			logger.info("接收从浏览器发过来的消息为："+message);
//
//			//WebScoketPacketId+data(命令类型+data)
//			//此处可以获取到有浏览器发送过来的WebSocketPacketId
//			//去掉WebSocketPacketId剩下：命令类型+data
//
//			//如这里传过来的是一种命令则通过命令管理器进行处理
//			gmManager.dealWithCommand(message);
//
//		}else if(msg instanceof BinaryWebSocketFrame){
//			ByteBuf byteBuf=((BinaryWebSocketFrame)msg).content();
//			short id= byteBuf.getShort(0);
//			logger.info("获取到packetId为："+id);
//			int data= byteBuf.getInt(2);
//			logger.info("数据内容为："+data);
//		}
//		channel.writeAndFlush(new TextWebSocketFrame("服务端推送过来的消息：" +msg ));
//	}
//
//	@Override
//	public void channelActive(ChannelHandlerContext ctx) throws Exception {
//		Channel incoming = ctx.channel();
//		logger.info("用户:"+incoming.remoteAddress()+"上线...");
//	}
//
//	@Override
//	public void channelInactive(ChannelHandlerContext ctx) throws Exception {
//		Channel incoming = ctx.channel();
//		logger.info("用户:"+incoming.remoteAddress()+"离线...");
//	}
//
//	@Override
//	public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
//			throws Exception {
//		Channel incoming = ctx.channel();
//		// 当出现异常就关闭连接
//		cause.printStackTrace();
//		logger.info("用户:"+incoming.remoteAddress()+"异常："+cause);
//		ctx.close();
//	}
//
//	@Override
//	public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
//		super.userEventTriggered(ctx, evt);
//		if(evt instanceof WebSocketServerProtocolHandler.HandshakeComplete){
//			logger.info("握手成功...");
//		}
//	}
//
//}
