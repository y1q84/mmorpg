import { AbstractPacket } from "./AbstractPacket";

    
    
export class PacketId{

    /**请求登录**/
    public static readonly LOGIN_REQ :number =10001;

    /**请求命令**/
    public static readonly COMMAND_REQ:number =10201;
    /**响应命令**/
    public static readonly COMMAND_RESP:number =10202;

    /**packetId————>具体包名 */
    private static packetId2PacketClassName = new Map<number,string>();

    /**具体包名————>packetId */
    private static packetClassName2PacketId = new Map<string,number>();


    public static addPacketId2PacketClassName(packetId:number,classname:string){
        this.packetId2PacketClassName.set(packetId,classname);
    }

    public static addpacketClassName2PacketId(classname:string,packetId:number){
        this.packetClassName2PacketId.set(classname,packetId);
    }

    public static getPacketId2PacketClassName(packetId:number):string{
        return this.packetId2PacketClassName.get(packetId);
    }

    public static getPacketClassName2PacketId(classname:string):number{
        return this.packetClassName2PacketId.get(classname);
    }


}