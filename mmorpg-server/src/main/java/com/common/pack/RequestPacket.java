package com.common.pack;

/**封装请求数据**/
public class RequestPacket {

    private short packetId;
    private byte[] data;

    public static RequestPacket valueOf(short packetId,byte[] data){
        RequestPacket rp=new RequestPacket();
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
