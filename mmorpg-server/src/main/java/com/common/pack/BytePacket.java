package com.common.pack;

/**封装数据**/
public class BytePacket {

    private short packetId;
    private byte[] data;

    public static BytePacket valueOf(short packetId, byte[] data){
        BytePacket rp=new BytePacket();
        rp.setPacketId(packetId);
        rp.setData(data);
        return rp;
    }

    public short getPacketId() {
        return packetId;
    }

    public void setPacketId(short packetId) {
        this.packetId = packetId;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
