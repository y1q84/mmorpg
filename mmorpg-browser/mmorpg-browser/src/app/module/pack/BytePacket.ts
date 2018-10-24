
/**封装请求数据 */
export class BytePacket{

    private packetId:number;
    private data:Uint8Array;

    public static valueOf(packetId:number,data:Uint8Array):BytePacket{
        let bytePacket=new BytePacket();
        bytePacket.setPacketId(packetId);
        bytePacket.setData(data);
        return bytePacket;
    }

    public getPacketId():number {
        return this.packetId;
    }

    public setPacketId(packetId:number) {
        this.packetId = packetId;
    }

    public getData():Uint8Array {
        return this.data;
    }

    public setData(data:Uint8Array) {
        this.data = data;
    }


    /**
     * 数据格式为：
     * 包长+packetId+数据
     */
    encode():ArrayBuffer{

        /**初始化数据缓冲区的大小 */
        let buffer = new ArrayBuffer(4+2+this.data.length);
        /**将缓冲区数据放进视图里面 */
        let dataView = new DataView(buffer);
        /**表示包长 */
        dataView.setUint32(0,buffer.byteLength);
        /**表示packetId */
        dataView.setUint16(4, this.packetId); 
        /**数据部分 */
        this.data.forEach((value, index ,data)=>{
            // console.log(value.toString());
            dataView.setUint8(6+index, value);
           });

        return buffer;
    }
    
}