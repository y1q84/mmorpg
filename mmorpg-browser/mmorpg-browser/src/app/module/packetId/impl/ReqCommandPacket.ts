import { AbstractPacket } from "../AbstractPacket";
import { PacketId } from "../PacketId";


export class ReqCommandPacket extends AbstractPacket{

    private moveId:number;


    /**
     * Getter $moveId
     * @return {number}
     */
	public get $moveId(): number {
		return this.moveId;
	}

    /**
     * Setter $moveId
     * @param {number} value
     */
	public set $moveId(value: number) {
		this.moveId = value;
	}
    

    public getPacketId():number{
        return PacketId.COMMAND_REQ;
    }

}