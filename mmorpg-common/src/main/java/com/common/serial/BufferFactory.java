package com.common.serial;

import io.netty.buffer.ByteBuf;
import io.netty.buffer.ByteBufAllocator;
import io.netty.buffer.PooledByteBufAllocator;
import java.nio.ByteOrder;
/**
 * buff工厂
 *
 */
public class BufferFactory {
	
	public static ByteOrder BYTE_ORDER = ByteOrder.BIG_ENDIAN;

	private static ByteBufAllocator byteBufAllocator= PooledByteBufAllocator.DEFAULT;

	/**
	 * 获取一个buffer
	 * 
	 * @return
	 */
	public static ByteBuf getBuffer() {
		ByteBuf byteBuf= byteBufAllocator.heapBuffer();
		byteBuf=byteBuf.order(BYTE_ORDER);
		return byteBuf;
	}

	/**
	 * 将数据写入buffer
	 * @param bytes
	 * @return
	 */
	public static ByteBuf getBuffer(byte[] bytes) {
		ByteBuf byteBuf=byteBufAllocator.heapBuffer();
		byteBuf=byteBuf.order(BYTE_ORDER);
		byteBuf.writeBytes(bytes);
		return byteBuf;
	}

}
