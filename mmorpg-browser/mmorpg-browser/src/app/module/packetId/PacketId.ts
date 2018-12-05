import { ReqLoginPacket, ResLoginPacket, ReqCreateRolePacket, RespCreateRolePacket,
    ReqEnterScenePacket, RespEnterScenePacket, ReqRoleLoginPacket, RespRoleLoginPacket,
    ReqRegisterPacket,
    RespRegisterPacket,
    RespRemoveRolePacket,
    RespBroadcastScenePacket,
    ReqChangeMapInstancePacket,
    RespChangeMapInstancePacket,
    ReqAttackMonsterPacket,
    RespAttackMonsterPacket} from 'src/app/proto/bundle';



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
    /**请求注册账号**/
    public static readonly REGISTER_REQ: number = 10004;
    /**响应注册账号**/
    public static readonly REGISTER_RESP: number = 10005;
    /**请求创建角色**/
    public static readonly CREATE_ROLE_REQ: number = 10010;
    /**响应创建角色**/
    public static readonly CREATE_ROLE_RESP: number = 10011;
    /**请求角色登录**/
    public static readonly ROLE_LOGIN_REQ: number = 10012;
    /**响应角色登录**/
    public static readonly ROLE_LOGIN_RESP: number = 10013;
    /**响应将角色挤下线**/
    public static readonly REMOVE_ROLE_RESP: number = 10014;
    /**请求进入场景**/
    public static readonly ENTER_WORLD_REQ: number = 10020;
    /**响应进入场景**/
    public static readonly ENTER_WORLD_RESP: number = 10021;
    /**广播玩家场景信息**/
    public static readonly BROADCAST_SCENE_RESP: number = 10022;
    /**请求切换场景**/
    public static readonly CHANGE_SCENE_REQ: number = 10023;
    /**响应切换场景**/
    public static readonly CHANGE_SCENE_RESP: number = 10024;

    /**请求命令**/
    public static readonly COMMAND_REQ: number = 10201;
    /**响应命令**/
    public static readonly COMMAND_RESP: number = 10202;
    /**请求攻击怪物**/
    public static readonly ATTACK_MONSTER_REQ: number = 10203;
    /**响应攻击怪物**/
    public static readonly ATTACK_MONSTER_RESP: number = 10204;

    constructor() {
        PacketId.add(PacketId.LOGIN_REQ, ReqLoginPacket);
        PacketId.add(PacketId.LOGIN_RESP, ResLoginPacket);
        PacketId.add(PacketId.REGISTER_REQ, ReqRegisterPacket);
        PacketId.add(PacketId.REGISTER_RESP, RespRegisterPacket);
        PacketId.add(PacketId.CREATE_ROLE_REQ, ReqCreateRolePacket);
        PacketId.add(PacketId.CREATE_ROLE_RESP, RespCreateRolePacket);
        PacketId.add(PacketId.ENTER_WORLD_REQ, ReqEnterScenePacket);
        PacketId.add(PacketId.ENTER_WORLD_RESP, RespEnterScenePacket);
        PacketId.add(PacketId.ROLE_LOGIN_REQ, ReqRoleLoginPacket);
        PacketId.add(PacketId.ROLE_LOGIN_RESP, RespRoleLoginPacket);
        PacketId.add(PacketId.REMOVE_ROLE_RESP, RespRemoveRolePacket);
        PacketId.add(PacketId.BROADCAST_SCENE_RESP, RespBroadcastScenePacket);
        PacketId.add(PacketId.CHANGE_SCENE_REQ, ReqChangeMapInstancePacket);
        PacketId.add(PacketId.CHANGE_SCENE_RESP, RespChangeMapInstancePacket);
        PacketId.add(PacketId.ATTACK_MONSTER_REQ, ReqAttackMonsterPacket);
        PacketId.add(PacketId.ATTACK_MONSTER_RESP, RespAttackMonsterPacket);
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
