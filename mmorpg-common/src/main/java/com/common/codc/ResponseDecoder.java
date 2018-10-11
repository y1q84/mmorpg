package com.common.codc;

import com.common.constant.ConstantValue;
import com.common.model.Response;
import io.netty.buffer.ByteBuf;
import io.netty.channel.ChannelHandlerContext;
import io.netty.handler.codec.ByteToMessageDecoder;

import java.util.List;

/**
 * 响应解码器
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
//FrameDecoder
public class ResponseDecoder extends ByteToMessageDecoder {
	
	/**
	 * 数据包基本长度
	 */
	public static int BASE_LENTH = 4 + 2 + 2 + 4;

//	@Override
//	protected Object decode(ChannelHandlerContext arg0, Channel arg1, ChannelBuffer buffer) throws Exception {
//
//
//		//数据包不完整，需要等待后面的包来
//		return null;
//	}

	@Override
	protected void decode(ChannelHandlerContext ctx, ByteBuf in, List<Object> out) throws Exception {
		//可读长度必须大于基本长度
		if(in.readableBytes() >= BASE_LENTH){

			//记录包头开始的index
			int beginReader = in.readerIndex();

			while(true){
				if(in.readInt() == ConstantValue.FLAG){
					break;
				}
			}

			//模块号
			short module = in.readShort();
			//命令号
			short cmd = in.readShort();
			//状态码
			int stateCode = in.readInt();
			//长度
			int length = in.readInt();

			if(in.readableBytes() < length){
				//还原读指针
				in.readerIndex(beginReader);
				return ;
			}

			byte[] data = new byte[length];
			in.readBytes(data);

			Response response = new Response();
			response.setModule(module);
			response.setCmd(cmd);
			response.setStateCode(stateCode);
			response.setData(data);

			//继续往下传递
			out.add(response);

		}
	}
}
