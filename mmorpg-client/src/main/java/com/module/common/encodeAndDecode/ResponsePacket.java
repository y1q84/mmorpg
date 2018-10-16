package com.module.common.encodeAndDecode;

/**封装响应数据**/
public class ResponsePacket {
   private short packetId;
   private byte[] data;


   public static ResponsePacket valueOf(short packetId,byte[] data){
       ResponsePacket resp=new ResponsePacket();
       resp.setPacketId(packetId);
       resp.setData(data);
       return resp;
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
