package com.common.codc;

import com.common.constant.ConstantValue;
import com.common.model.Response;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.MessageToByteEncoder;

/**
 * 响应编码器
 * <pre>
 * 数据包格式
 * 包头 + 模块号 + 命令号 + 长度 + 数据
 * </pre>
 * 包头4字节
 * 模块号2字节short
 * 命令号2字节short
 * 长度4字节(描述数据部分字节长度)
 *
 */
//OneToOneEncoder
public class ResponseEncoder extends MessageToByteEncoder {

//	@Override
//	protected Object encode(ChannelHandlerContext context, Channel channel, Object rs) throws Exception {
//		Response response = (Response)(rs);
//
//		ChannelBuffer buffer = ChannelBuffers.dynamicBuffer();
//		//包头
//		buffer.writeInt(ConstantValue.FLAG);
//		//module
//		buffer.writeShort(response.getModule());
//		//cmd
//		buffer.writeShort(response.getCmd());
//		//状态码
//		buffer.writeInt(response.getStateCode());
//		//长度
//		buffer.writeInt(response.getDataLength());
//		//data
//		if(response.getData() != null){
//			buffer.writeBytes(response.getData());
//		}
//
//		return buffer;
//	}

	@Override
	protected void encode(ChannelHandlerContext ctx, Object msg, ByteBuf out) throws Exception {
		Response response = (Response)msg;

		//ChannelBuffer buffer = ChannelBuffers.dynamicBuffer();
		//包头
		out.writeInt(ConstantValue.FLAG);
		//module
		out.writeShort(response.getModule());
		//cmd
		out.writeShort(response.getCmd());
		//状态码
		out.writeInt(response.getStateCode());
		//长度
		out.writeInt(response.getDataLength());
		//data
		if(response.getData() != null){
			out.writeBytes(response.getData());
		}
		//return buffer;
	}
}
