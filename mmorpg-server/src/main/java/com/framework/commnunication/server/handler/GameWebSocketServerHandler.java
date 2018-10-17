package com.framework.commnunication.server.handler;

import com.baidu.bjf.remoting.protobuf.Codec;
import com.common.packetId.AbstractPaket;
import com.common.packetId.PacketId;
import com.module.logic.gm.manager.GMManager;
import io.netty.buffer.ByteBuf;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@ChannelHandler.Sharable
@Component
public class GameWebSocketServerHandler extends SimpleChannelInboundHandler<WebSocketFrame> {

    private static Logger logger= LoggerFactory.getLogger(GameWebSocketServerHandler.class);

    @Autowired
    private GMManager gmManager;


	@Autowired
	private PacketId packetId;

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, WebSocketFrame msg) throws Exception {

        logger.info("浏览器发送消息过来了...");
        Channel channel=ctx.channel();

        if(msg instanceof TextWebSocketFrame){//文本格式
            //此处应该有将数据解析，接着进行封装操作
            //String message=((TextWebSocketFrame) msg).text();
            //logger.info("接收从浏览器发过来的消息为："+message);

            //WebScoketPacketId+data(命令类型+data)
            //此处可以获取到有浏览器发送过来的WebSocketPacketId
            //去掉WebSocketPacketId剩下：命令类型+data

            //如这里传过来的是一种命令则通过命令管理器进行处理
            //gmManager.dealWithCommand(message);

        }else if(msg instanceof BinaryWebSocketFrame){//二进制流格式
            //将WebSocketFrame转为BinaryWebSocketFrame
            //读取内容
            ByteBuf byteBuf=((BinaryWebSocketFrame)msg).content();

            /**
             * 发送给过来的数据格式：
             * 包长 + packetId + 数据
             * 包长4个字节，packetId占2个字节
             **/
            int packetLength=byteBuf.readInt();//读取包长
            logger.info("包长为："+packetLength);
            if ((packetLength-4)!=byteBuf.readableBytes()){
                logger.error("该包数据不完整...");
                return ;
            }
            short pacId=byteBuf.readShort();//读取packetId
            logger.info("获取到packetId为："+pacId);
            byte[] data=new byte[byteBuf.readableBytes()];//读取数据


            //根据packetId获取jprotobuf的编解码器
//			Codec codec=packetId.getCodec(pacId);
//			//将数据进行解码
//			Object obj=codec.decode(data);
//			AbstractPaket absPacket=(AbstractPaket)obj;
//
//			if(obj instanceof AbstractPaket){
//				logger.info("收到的对象为；"+absPacket);
//			}
//
//			//将请求传给下一个handler处理
//			ctx.fireChannelRead(absPacket);


//            RequestPacket requestPacket=RequestPacket.valueOf(packetId2,data);
//            byteBuf.readBytes(data);
//            Class clazz=webSocketPacketId.getPacketId2Command().get(packetId2);
//            String command=new String(data, Charset.forName("utf8"));
//            logger.info("输入命令为："+command);
//            // 需要<class->method>的map
//            public void doCommand(ReqCommandPacket reqCommandPacket)
//            method.invoke(obj,)




        }
        channel.writeAndFlush(new TextWebSocketFrame("服务端推送过来的消息：" +msg ));

    }


    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        Channel incoming = ctx.channel();
        logger.info("用户:"+incoming.remoteAddress()+"上线...");
    }

    @Override
    public void channelInactive(ChannelHandlerContext ctx) throws Exception {
        Channel incoming = ctx.channel();
        logger.info("用户:"+incoming.remoteAddress()+"离线...");
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause)
            throws Exception {
        Channel incoming = ctx.channel();
        // 当出现异常就关闭连接
        cause.printStackTrace();
        logger.info("用户:"+incoming.remoteAddress()+"异常："+cause);
        ctx.close();
    }

    @Override
    public void userEventTriggered(ChannelHandlerContext ctx, Object evt) throws Exception {
        super.userEventTriggered(ctx, evt);
        if(evt instanceof WebSocketServerProtocolHandler.HandshakeComplete){
            logger.info("握手成功...");
        }
    }
}
