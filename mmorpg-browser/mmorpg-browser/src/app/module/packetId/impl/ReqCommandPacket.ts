import { AbstractPacket } from "../AbstractPacket";
import { PacketId } from "../PacketId";


export class ReqCommandPacket extends AbstractPacket{

    constructor(packetid:PacketId){
        super();
        PacketId.addpacketClassName2PacketId(PacketId.COMMAND_REQ,this.constructor.name);
        PacketId.addPacketId2PacketClassName(PacketId.COMMAND_REQ,this.constructor.name);
    }

    public getPacketClassName():string{
        return this.constructor.name;
    }

}