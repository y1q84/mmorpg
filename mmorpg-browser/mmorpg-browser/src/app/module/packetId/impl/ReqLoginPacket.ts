import { AbstractPacket } from "../AbstractPacket";
import { PacketId } from "../PacketId";

export class ReqLoginPacket extends AbstractPacket{

    private userName : string;
    private password : string;

    /**
     * Getter $userName
     * @return {string}
     */
	public get $userName(): string {
		return this.userName;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Setter $userName
     * @param {string} value
     */
	public set $userName(value: string) {
		this.userName = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    public getPacketId():number{
        return PacketId.LOGIN_REQ;
    }
}