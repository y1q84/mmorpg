package com.framework.commnunication.server.websocket.handler;

import com.baidu.bjf.remoting.protobuf.Codec;
import com.common.pack.BytePacket;
import com.common.packetId.AbstractPacket;
import com.common.packetId.PacketId;
import com.module.logic.gm.manager.GMManager;
import com.module.logic.login.packet.ReqLoginPacket;
import io.netty.channel.Channel;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;
import io.netty.handler.codec.http.websocketx.TextWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketServerProtocolHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

/**读取消息处理器**/
@ChannelHandler.Sharable
@Component
public class GameWebSocketServerInboundHandler extends SimpleChannelInboundHandler<BytePacket> {

    private static Logger logger= LoggerFactory.getLogger(GameWebSocketServerInboundHandler.class);

    @Autowired
    private GMManager gmManager;

	@Autowired
	private PacketId packetId;

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, BytePacket msg) throws Exception {

        logger.info("浏览器发送消息过来了...");

        //AbstractPacket packet = PacketFactory.create(pacId, data);
        //packet.excute();
        //bean = map.get()
        //bean.invoke(packet)

        /**发送过来的数据应该是一个封装的RequestPacket对象**/
        Channel channel=ctx.channel();
        short pack=msg.getPacketId();
        byte[] data=msg.getData();
        /**根据packetId获取jprotobuf的编解码器**/
        Codec codec=packetId.getCodec(pack);
        logger.info("packeId对应的编解码器："+codec);
        /**将数据进行解码**/
        Object obj=codec.decode(data);
        if(obj instanceof ReqLoginPacket){
            ReqLoginPacket reqLoginPacket=(ReqLoginPacket) obj;
            logger.info("ReqLoginpacket对应的packetId为："+reqLoginPacket.getPacketId());
            logger.info("具体的请求类为："+reqLoginPacket.getClass().getName()+"\t,用户名:"+reqLoginPacket.getUserName()+",\t密码："+reqLoginPacket.getPassword());
            channel.writeAndFlush(new TextWebSocketFrame("登陆成功"));
        }

        //将请求传给下一个handler处理
        if(obj instanceof AbstractPacket){
            ctx.fireChannelRead(obj);
        }

        //将byte[]转成string
        //String command=new String(data, Charset.forName("utf8"));
        // channel.writeAndFlush(new TextWebSocketFrame("服务端推送===========>>：" +msg ));
    }


    @Override
    public void channelActive(ChannelHandlerContext ctx) throws Exception {
        Channel incoming = ctx.channel();
        //incoming.writeAndFlush(new TextWebSocketFrame("连接成功"));
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
            //ctx.channel().writeAndFlush("连接成功");
        }
    }
}
