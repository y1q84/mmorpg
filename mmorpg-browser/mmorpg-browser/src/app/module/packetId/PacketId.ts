import { ReqLoginPacket, ResLoginPacket } from "src/app/proto/bundle";

export class PacketId{

    /**packetId————>具体类 */
    private static packetId2PacketClassName = new Map<number,any>();
    /**具体类————>packetId */
    private static packetClassName2PacketId = new Map<any,number>();

    /**请求登录**/
    public static readonly LOGIN_REQ :number =10001;
    public static readonly LOGIN_RESP :number=1002;

    /**请求命令**/
    public static readonly COMMAND_REQ:number =10201;
    /**响应命令**/
    public static readonly COMMAND_RESP:number =10202;

    constructor(){
        PacketId.add(PacketId.LOGIN_REQ,ReqLoginPacket);
        PacketId.add(PacketId.LOGIN_RESP,ResLoginPacket);
    }


    public static add(packetId:number,clazz:Object){
        this.packetId2PacketClassName.set(packetId,clazz);
        this.packetClassName2PacketId.set(clazz,packetId);
    }

    public static getPacketId2PacketClass(packetId:number):any{
        return this.packetId2PacketClassName.get(packetId);
    }

    public static getPacketClass2PacketId(clazz:any):number{
        return this.packetClassName2PacketId.get(clazz);
    }


}