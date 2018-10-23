package com.framework.commnunication.server.websocket.handler;

import com.common.pack.BytePacket;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandler;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToMessageCodec;
import io.netty.handler.codec.http.websocketx.BinaryWebSocketFrame;
import io.netty.handler.codec.http.websocketx.WebSocketFrame;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.util.List;

import static io.netty.buffer.Unpooled.buffer;

/**
 * 编解码器
 * author:ydx
 * create 2018\10\23 0023
 */
@ChannelHandler.Sharable
@Component
public class WebSocketServerCodecHandler extends MessageToMessageCodec<WebSocketFrame, BytePacket> {

    Logger logger=LoggerFactory.getLogger(WebSocketServerCodecHandler.class);

    @Override
    protected void encode(ChannelHandlerContext channelHandlerContext, BytePacket requestPacket, List<Object> list) throws Exception {

        short packetId=requestPacket.getPacketId();
        byte[] data=requestPacket.getData();
        int packetLength=4+2+data.length;
        ByteBuf byteBuf=buffer(packetLength);
        byteBuf.writeInt(packetLength);
        byteBuf.writeShort(packetId);
        byteBuf.writeBytes(data);
        WebSocketFrame webSocketFrame=new BinaryWebSocketFrame(byteBuf);
        list.add(webSocketFrame);

    }

    @Override
    protected void decode(ChannelHandlerContext channelHandlerContext, WebSocketFrame webSocketFrame, List<Object> list) throws Exception {

        /**
         * 发送给过来的数据格式：
         * 包长 + packetId + 数据
         * 包长4个字节，packetId占2个字节
         **/
        //发过来的应该是二进制流
        ByteBuf byteBuf=webSocketFrame.content();

        /**读取包长**/
        int packetLength=byteBuf.readInt();
        logger.info("包长为："+packetLength);
        if ((packetLength-4)!=byteBuf.readableBytes()){
            logger.error("该包数据不完整...");
            return ;
        }
        /**读取packetId**/
        short packetId=byteBuf.readShort();
        logger.info("获取到packetId为："+packetId);
        /**读取数据**/
        byte[] data=new byte[byteBuf.readableBytes()];
        byteBuf.readBytes(data);
        //输出字节数组内容
        StringBuilder stringBuilder=new StringBuilder();
        for (byte b : data) {
            //stringBuilder.append(new Integer(b & 0xFF)+",");
            //将byte转为无复数的byte
            stringBuilder.append(Byte.toUnsignedInt(b)+",");
        }
        logger.info(String.format("字节数组内容为:[%s]",stringBuilder.toString()));

        BytePacket packet= BytePacket.valueOf(packetId,data);
        list.add(packet);


    }
}
