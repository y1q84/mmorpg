import { ReqLoginPacket, ResLoginPacket, ReqCreateRolePacket, RespCreateRolePacket } from 'src/app/proto/bundle';



export class PacketId {

    /**packetId————>具体类 */
    private static packetId2PacketClassName = new Map<number, any>();
    /**具体类————>packetId */
    private static packetClassName2PacketId = new Map<any, number>();

    /**请求登录**/
    public static readonly LOGIN_REQ: number = 10001;
    /**响应登录**/
    public static readonly LOGIN_RESP: number = 10002;
    public static readonly LOGIN_AUTH_REQ: number = 10003;
    /**请求创建角色**/
    public static readonly CREATE_ROLE_REQ: number = 10010;
    /**响应创建角色**/
    public static readonly CREATE_ROLE_RESP: number = 10011;

    /**请求命令**/
    public static readonly COMMAND_REQ: number = 10201;
    /**响应命令**/
    public static readonly COMMAND_RESP: number = 10202;

    constructor() {
        PacketId.add(PacketId.LOGIN_REQ, ReqLoginPacket);
        PacketId.add(PacketId.LOGIN_RESP, ResLoginPacket);
        PacketId.add(PacketId.CREATE_ROLE_REQ, ReqCreateRolePacket);
        PacketId.add(PacketId.CREATE_ROLE_RESP, RespCreateRolePacket);
    }


    public static add(packetId: number, clazz: Object) {
        this.packetId2PacketClassName.set(packetId, clazz);
        this.packetClassName2PacketId.set(clazz, packetId);
    }

    public static getPacketId2PacketClass(packetId: number): any {
        return this.packetId2PacketClassName.get(packetId);
    }

    public static getPacketClass2PacketId(clazz: any): number {
        return this.packetClassName2PacketId.get(clazz);
    }
}
