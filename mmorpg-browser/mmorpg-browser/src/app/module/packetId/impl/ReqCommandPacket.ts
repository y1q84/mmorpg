import { AbstractPacket } from "../AbstractPacket";
import { PacketId } from "../PacketId";


export class ReqCommandPacket extends AbstractPacket{

    private moveId:number;

    public getMoveId():number{
        return this.moveId;
    }

    public setMoveId(moveId:number){
        this.moveId=moveId;
    }

    public getPacketId():number{
        return PacketId.COMMAND_REQ;
    }

}