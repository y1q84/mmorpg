package com.common.codc;

import com.common.constant.ConstantValue;
import com.common.model.Request;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

/**
 * 请求编码器
 * <pre>
 * 数据包格式
 * |包头 + 模块号 + 命令号 + 长度 + 数据
 * </pre>
 * 包头4字节
 * 模块号2字节short
 * 命令号2字节short
 * 长度4字节(描述数据部分字节长度)
 *
 */
//OneToOneEncoder
public class RequestEncoder extends MessageToByteEncoder {

//	@Override
//	protected Object encode(ChannelHandlerContext context, Channel channel, Object rs) throws Exception {
//		Request request = (Request)(rs);
//
//		ChannelBuffer buffer = ChannelBuffers.dynamicBuffer();
//		//包头
//		buffer.writeInt(ConstantValue.FLAG);
//		//module
//		buffer.writeShort(request.getModule());
//		//cmd
//		buffer.writeShort(request.getCmd());
//		//长度
//		buffer.writeInt(request.getDataLength());
//		//data
//		if(request.getData() != null){
//			buffer.writeBytes(request.getData());
//		}
//
//		return buffer;
//	}

	@Override
	protected void encode(ChannelHandlerContext ctx, Object msg, ByteBuf out) throws Exception {
		Request request = (Request)(msg);
		//包头
		out.writeInt(ConstantValue.FLAG);
		//module
		out.writeShort(request.getModule());
		//cmd
		out.writeShort(request.getCmd());
		//长度
		out.writeInt(request.getDataLength());
		//data
		if(request.getData() != null){
			out.writeBytes(request.getData());
		}

		//return buffer;
	}
}
