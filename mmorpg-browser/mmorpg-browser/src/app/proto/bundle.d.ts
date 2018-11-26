import * as $protobuf from "protobufjs";
import { Long }  from "protobufjs";
/** Properties of a ReqLoginPacket. */
export interface IReqLoginPacket {

    /** ReqLoginPacket account */
    account?: (string|null);

    /** ReqLoginPacket password */
    password?: (string|null);
}

/** Represents a ReqLoginPacket. */
export class ReqLoginPacket implements IReqLoginPacket {

    /**
     * Constructs a new ReqLoginPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqLoginPacket);

    /** ReqLoginPacket account. */
    public account: string;

    /** ReqLoginPacket password. */
    public password: string;

    /**
     * Creates a new ReqLoginPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqLoginPacket instance
     */
    public static create(properties?: IReqLoginPacket): ReqLoginPacket;

    /**
     * Encodes the specified ReqLoginPacket message. Does not implicitly {@link ReqLoginPacket.verify|verify} messages.
     * @param message ReqLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqLoginPacket message, length delimited. Does not implicitly {@link ReqLoginPacket.verify|verify} messages.
     * @param message ReqLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqLoginPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqLoginPacket;

    /**
     * Decodes a ReqLoginPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqLoginPacket;

    /**
     * Verifies a ReqLoginPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqLoginPacket
     */
    public static fromObject(object: { [k: string]: any }): ReqLoginPacket;

    /**
     * Creates a plain object from a ReqLoginPacket message. Also converts values to other types if specified.
     * @param message ReqLoginPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqLoginPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqLoginPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ResLoginPacket. */
export interface IResLoginPacket {

    /** ResLoginPacket result */
    result?: (string|null);

    /** ResLoginPacket playerEntityInfos */
    playerEntityInfos?: (IPlayerEntityInfo[]|null);
}

/** Represents a ResLoginPacket. */
export class ResLoginPacket implements IResLoginPacket {

    /**
     * Constructs a new ResLoginPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResLoginPacket);

    /** ResLoginPacket result. */
    public result: string;

    /** ResLoginPacket playerEntityInfos. */
    public playerEntityInfos: IPlayerEntityInfo[];

    /**
     * Creates a new ResLoginPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResLoginPacket instance
     */
    public static create(properties?: IResLoginPacket): ResLoginPacket;

    /**
     * Encodes the specified ResLoginPacket message. Does not implicitly {@link ResLoginPacket.verify|verify} messages.
     * @param message ResLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResLoginPacket message, length delimited. Does not implicitly {@link ResLoginPacket.verify|verify} messages.
     * @param message ResLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResLoginPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResLoginPacket;

    /**
     * Decodes a ResLoginPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResLoginPacket;

    /**
     * Verifies a ResLoginPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResLoginPacket
     */
    public static fromObject(object: { [k: string]: any }): ResLoginPacket;

    /**
     * Creates a plain object from a ResLoginPacket message. Also converts values to other types if specified.
     * @param message ResLoginPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResLoginPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResLoginPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a PlayerEntityInfo. */
export interface IPlayerEntityInfo {

    /** PlayerEntityInfo id */
    id?: (number|Long|null);

    /** PlayerEntityInfo sex */
    sex?: (string|null);

    /** PlayerEntityInfo name */
    name?: (string|null);

    /** PlayerEntityInfo roleType */
    roleType?: (string|null);
}

/** Represents a PlayerEntityInfo. */
export class PlayerEntityInfo implements IPlayerEntityInfo {

    /**
     * Constructs a new PlayerEntityInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPlayerEntityInfo);

    /** PlayerEntityInfo id. */
    public id: (number|Long);

    /** PlayerEntityInfo sex. */
    public sex: string;

    /** PlayerEntityInfo name. */
    public name: string;

    /** PlayerEntityInfo roleType. */
    public roleType: string;

    /**
     * Creates a new PlayerEntityInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PlayerEntityInfo instance
     */
    public static create(properties?: IPlayerEntityInfo): PlayerEntityInfo;

    /**
     * Encodes the specified PlayerEntityInfo message. Does not implicitly {@link PlayerEntityInfo.verify|verify} messages.
     * @param message PlayerEntityInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPlayerEntityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PlayerEntityInfo message, length delimited. Does not implicitly {@link PlayerEntityInfo.verify|verify} messages.
     * @param message PlayerEntityInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPlayerEntityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PlayerEntityInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PlayerEntityInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PlayerEntityInfo;

    /**
     * Decodes a PlayerEntityInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PlayerEntityInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PlayerEntityInfo;

    /**
     * Verifies a PlayerEntityInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PlayerEntityInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PlayerEntityInfo
     */
    public static fromObject(object: { [k: string]: any }): PlayerEntityInfo;

    /**
     * Creates a plain object from a PlayerEntityInfo message. Also converts values to other types if specified.
     * @param message PlayerEntityInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PlayerEntityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PlayerEntityInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqLoginAuthPacket. */
export interface IReqLoginAuthPacket {

    /** ReqLoginAuthPacket account */
    account?: (string|null);

    /** ReqLoginAuthPacket password */
    password?: (string|null);

    /** ReqLoginAuthPacket key */
    key?: (string|null);
}

/** Represents a ReqLoginAuthPacket. */
export class ReqLoginAuthPacket implements IReqLoginAuthPacket {

    /**
     * Constructs a new ReqLoginAuthPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqLoginAuthPacket);

    /** ReqLoginAuthPacket account. */
    public account: string;

    /** ReqLoginAuthPacket password. */
    public password: string;

    /** ReqLoginAuthPacket key. */
    public key: string;

    /**
     * Creates a new ReqLoginAuthPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqLoginAuthPacket instance
     */
    public static create(properties?: IReqLoginAuthPacket): ReqLoginAuthPacket;

    /**
     * Encodes the specified ReqLoginAuthPacket message. Does not implicitly {@link ReqLoginAuthPacket.verify|verify} messages.
     * @param message ReqLoginAuthPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqLoginAuthPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqLoginAuthPacket message, length delimited. Does not implicitly {@link ReqLoginAuthPacket.verify|verify} messages.
     * @param message ReqLoginAuthPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqLoginAuthPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqLoginAuthPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqLoginAuthPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqLoginAuthPacket;

    /**
     * Decodes a ReqLoginAuthPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqLoginAuthPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqLoginAuthPacket;

    /**
     * Verifies a ReqLoginAuthPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqLoginAuthPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqLoginAuthPacket
     */
    public static fromObject(object: { [k: string]: any }): ReqLoginAuthPacket;

    /**
     * Creates a plain object from a ReqLoginAuthPacket message. Also converts values to other types if specified.
     * @param message ReqLoginAuthPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqLoginAuthPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqLoginAuthPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqRegisterPacket. */
export interface IReqRegisterPacket {

    /** ReqRegisterPacket account */
    account?: (string|null);

    /** ReqRegisterPacket password */
    password?: (string|null);
}

/** Represents a ReqRegisterPacket. */
export class ReqRegisterPacket implements IReqRegisterPacket {

    /**
     * Constructs a new ReqRegisterPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqRegisterPacket);

    /** ReqRegisterPacket account. */
    public account: string;

    /** ReqRegisterPacket password. */
    public password: string;

    /**
     * Creates a new ReqRegisterPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqRegisterPacket instance
     */
    public static create(properties?: IReqRegisterPacket): ReqRegisterPacket;

    /**
     * Encodes the specified ReqRegisterPacket message. Does not implicitly {@link ReqRegisterPacket.verify|verify} messages.
     * @param message ReqRegisterPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqRegisterPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqRegisterPacket message, length delimited. Does not implicitly {@link ReqRegisterPacket.verify|verify} messages.
     * @param message ReqRegisterPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqRegisterPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqRegisterPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqRegisterPacket;

    /**
     * Decodes a ReqRegisterPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqRegisterPacket;

    /**
     * Verifies a ReqRegisterPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqRegisterPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqRegisterPacket
     */
    public static fromObject(object: { [k: string]: any }): ReqRegisterPacket;

    /**
     * Creates a plain object from a ReqRegisterPacket message. Also converts values to other types if specified.
     * @param message ReqRegisterPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqRegisterPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqRegisterPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespRegisterPacket. */
export interface IRespRegisterPacket {

    /** RespRegisterPacket result */
    result?: (string|null);
}

/** Represents a RespRegisterPacket. */
export class RespRegisterPacket implements IRespRegisterPacket {

    /**
     * Constructs a new RespRegisterPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespRegisterPacket);

    /** RespRegisterPacket result. */
    public result: string;

    /**
     * Creates a new RespRegisterPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespRegisterPacket instance
     */
    public static create(properties?: IRespRegisterPacket): RespRegisterPacket;

    /**
     * Encodes the specified RespRegisterPacket message. Does not implicitly {@link RespRegisterPacket.verify|verify} messages.
     * @param message RespRegisterPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRespRegisterPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespRegisterPacket message, length delimited. Does not implicitly {@link RespRegisterPacket.verify|verify} messages.
     * @param message RespRegisterPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRespRegisterPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespRegisterPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespRegisterPacket;

    /**
     * Decodes a RespRegisterPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespRegisterPacket;

    /**
     * Verifies a RespRegisterPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespRegisterPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespRegisterPacket
     */
    public static fromObject(object: { [k: string]: any }): RespRegisterPacket;

    /**
     * Creates a plain object from a RespRegisterPacket message. Also converts values to other types if specified.
     * @param message RespRegisterPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespRegisterPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespRegisterPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqCreateRolePacket. */
export interface IReqCreateRolePacket {

    /** ReqCreateRolePacket playerName */
    playerName?: (string|null);

    /** ReqCreateRolePacket sex */
    sex?: (string|null);

    /** ReqCreateRolePacket roleType */
    roleType?: (RoleType|null);
}

/** Represents a ReqCreateRolePacket. */
export class ReqCreateRolePacket implements IReqCreateRolePacket {

    /**
     * Constructs a new ReqCreateRolePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqCreateRolePacket);

    /** ReqCreateRolePacket playerName. */
    public playerName: string;

    /** ReqCreateRolePacket sex. */
    public sex: string;

    /** ReqCreateRolePacket roleType. */
    public roleType: RoleType;

    /**
     * Creates a new ReqCreateRolePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqCreateRolePacket instance
     */
    public static create(properties?: IReqCreateRolePacket): ReqCreateRolePacket;

    /**
     * Encodes the specified ReqCreateRolePacket message. Does not implicitly {@link ReqCreateRolePacket.verify|verify} messages.
     * @param message ReqCreateRolePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqCreateRolePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqCreateRolePacket message, length delimited. Does not implicitly {@link ReqCreateRolePacket.verify|verify} messages.
     * @param message ReqCreateRolePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqCreateRolePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqCreateRolePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqCreateRolePacket;

    /**
     * Decodes a ReqCreateRolePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqCreateRolePacket;

    /**
     * Verifies a ReqCreateRolePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqCreateRolePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqCreateRolePacket
     */
    public static fromObject(object: { [k: string]: any }): ReqCreateRolePacket;

    /**
     * Creates a plain object from a ReqCreateRolePacket message. Also converts values to other types if specified.
     * @param message ReqCreateRolePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqCreateRolePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqCreateRolePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** RoleType enum. */
export enum RoleType {
    WARRIOR = 0,
    MASTER = 1,
    TAOIST = 2
}

/** Properties of a RespCreateRolePacket. */
export interface IRespCreateRolePacket {

    /** RespCreateRolePacket result */
    result?: (string|null);

    /** RespCreateRolePacket playerId */
    playerId?: (number|Long|null);
}

/** Represents a RespCreateRolePacket. */
export class RespCreateRolePacket implements IRespCreateRolePacket {

    /**
     * Constructs a new RespCreateRolePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespCreateRolePacket);

    /** RespCreateRolePacket result. */
    public result: string;

    /** RespCreateRolePacket playerId. */
    public playerId: (number|Long);

    /**
     * Creates a new RespCreateRolePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespCreateRolePacket instance
     */
    public static create(properties?: IRespCreateRolePacket): RespCreateRolePacket;

    /**
     * Encodes the specified RespCreateRolePacket message. Does not implicitly {@link RespCreateRolePacket.verify|verify} messages.
     * @param message RespCreateRolePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRespCreateRolePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespCreateRolePacket message, length delimited. Does not implicitly {@link RespCreateRolePacket.verify|verify} messages.
     * @param message RespCreateRolePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRespCreateRolePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespCreateRolePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespCreateRolePacket;

    /**
     * Decodes a RespCreateRolePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespCreateRolePacket;

    /**
     * Verifies a RespCreateRolePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespCreateRolePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespCreateRolePacket
     */
    public static fromObject(object: { [k: string]: any }): RespCreateRolePacket;

    /**
     * Creates a plain object from a RespCreateRolePacket message. Also converts values to other types if specified.
     * @param message RespCreateRolePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespCreateRolePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespCreateRolePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqRoleLoginPacket. */
export interface IReqRoleLoginPacket {

    /** ReqRoleLoginPacket playerId */
    playerId?: (number|Long|null);
}

/** Represents a ReqRoleLoginPacket. */
export class ReqRoleLoginPacket implements IReqRoleLoginPacket {

    /**
     * Constructs a new ReqRoleLoginPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqRoleLoginPacket);

    /** ReqRoleLoginPacket playerId. */
    public playerId: (number|Long);

    /**
     * Creates a new ReqRoleLoginPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqRoleLoginPacket instance
     */
    public static create(properties?: IReqRoleLoginPacket): ReqRoleLoginPacket;

    /**
     * Encodes the specified ReqRoleLoginPacket message. Does not implicitly {@link ReqRoleLoginPacket.verify|verify} messages.
     * @param message ReqRoleLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqRoleLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqRoleLoginPacket message, length delimited. Does not implicitly {@link ReqRoleLoginPacket.verify|verify} messages.
     * @param message ReqRoleLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqRoleLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqRoleLoginPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqRoleLoginPacket;

    /**
     * Decodes a ReqRoleLoginPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqRoleLoginPacket;

    /**
     * Verifies a ReqRoleLoginPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqRoleLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqRoleLoginPacket
     */
    public static fromObject(object: { [k: string]: any }): ReqRoleLoginPacket;

    /**
     * Creates a plain object from a ReqRoleLoginPacket message. Also converts values to other types if specified.
     * @param message ReqRoleLoginPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqRoleLoginPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqRoleLoginPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespRoleLoginPacket. */
export interface IRespRoleLoginPacket {

    /** RespRoleLoginPacket playerId */
    playerId?: (number|Long|null);

    /** RespRoleLoginPacket result */
    result?: (string|null);
}

/** Represents a RespRoleLoginPacket. */
export class RespRoleLoginPacket implements IRespRoleLoginPacket {

    /**
     * Constructs a new RespRoleLoginPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespRoleLoginPacket);

    /** RespRoleLoginPacket playerId. */
    public playerId: (number|Long);

    /** RespRoleLoginPacket result. */
    public result: string;

    /**
     * Creates a new RespRoleLoginPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespRoleLoginPacket instance
     */
    public static create(properties?: IRespRoleLoginPacket): RespRoleLoginPacket;

    /**
     * Encodes the specified RespRoleLoginPacket message. Does not implicitly {@link RespRoleLoginPacket.verify|verify} messages.
     * @param message RespRoleLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRespRoleLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespRoleLoginPacket message, length delimited. Does not implicitly {@link RespRoleLoginPacket.verify|verify} messages.
     * @param message RespRoleLoginPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRespRoleLoginPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespRoleLoginPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespRoleLoginPacket;

    /**
     * Decodes a RespRoleLoginPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespRoleLoginPacket;

    /**
     * Verifies a RespRoleLoginPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespRoleLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespRoleLoginPacket
     */
    public static fromObject(object: { [k: string]: any }): RespRoleLoginPacket;

    /**
     * Creates a plain object from a RespRoleLoginPacket message. Also converts values to other types if specified.
     * @param message RespRoleLoginPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespRoleLoginPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespRoleLoginPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqEnterScenePacket. */
export interface IReqEnterScenePacket {

    /** ReqEnterScenePacket playerId */
    playerId?: (number|Long|null);

    /** ReqEnterScenePacket sceneId */
    sceneId?: (number|Long|null);
}

/** Represents a ReqEnterScenePacket. */
export class ReqEnterScenePacket implements IReqEnterScenePacket {

    /**
     * Constructs a new ReqEnterScenePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqEnterScenePacket);

    /** ReqEnterScenePacket playerId. */
    public playerId: (number|Long);

    /** ReqEnterScenePacket sceneId. */
    public sceneId: (number|Long);

    /**
     * Creates a new ReqEnterScenePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqEnterScenePacket instance
     */
    public static create(properties?: IReqEnterScenePacket): ReqEnterScenePacket;

    /**
     * Encodes the specified ReqEnterScenePacket message. Does not implicitly {@link ReqEnterScenePacket.verify|verify} messages.
     * @param message ReqEnterScenePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqEnterScenePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqEnterScenePacket message, length delimited. Does not implicitly {@link ReqEnterScenePacket.verify|verify} messages.
     * @param message ReqEnterScenePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqEnterScenePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqEnterScenePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqEnterScenePacket;

    /**
     * Decodes a ReqEnterScenePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqEnterScenePacket;

    /**
     * Verifies a ReqEnterScenePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqEnterScenePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqEnterScenePacket
     */
    public static fromObject(object: { [k: string]: any }): ReqEnterScenePacket;

    /**
     * Creates a plain object from a ReqEnterScenePacket message. Also converts values to other types if specified.
     * @param message ReqEnterScenePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqEnterScenePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqEnterScenePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespEnterScenePacket. */
export interface IRespEnterScenePacket {

    /** RespEnterScenePacket sceneId */
    sceneId?: (number|Long|null);

    /** RespEnterScenePacket mapObject */
    mapObject?: (IObjectInMapInfo[]|null);
}

/** Represents a RespEnterScenePacket. */
export class RespEnterScenePacket implements IRespEnterScenePacket {

    /**
     * Constructs a new RespEnterScenePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespEnterScenePacket);

    /** RespEnterScenePacket sceneId. */
    public sceneId: (number|Long);

    /** RespEnterScenePacket mapObject. */
    public mapObject: IObjectInMapInfo[];

    /**
     * Creates a new RespEnterScenePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespEnterScenePacket instance
     */
    public static create(properties?: IRespEnterScenePacket): RespEnterScenePacket;

    /**
     * Encodes the specified RespEnterScenePacket message. Does not implicitly {@link RespEnterScenePacket.verify|verify} messages.
     * @param message RespEnterScenePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRespEnterScenePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespEnterScenePacket message, length delimited. Does not implicitly {@link RespEnterScenePacket.verify|verify} messages.
     * @param message RespEnterScenePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRespEnterScenePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespEnterScenePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespEnterScenePacket;

    /**
     * Decodes a RespEnterScenePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespEnterScenePacket;

    /**
     * Verifies a RespEnterScenePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespEnterScenePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespEnterScenePacket
     */
    public static fromObject(object: { [k: string]: any }): RespEnterScenePacket;

    /**
     * Creates a plain object from a RespEnterScenePacket message. Also converts values to other types if specified.
     * @param message RespEnterScenePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespEnterScenePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespEnterScenePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an ObjectInMapInfo. */
export interface IObjectInMapInfo {

    /** ObjectInMapInfo objectId */
    objectId?: (number|Long|null);

    /** ObjectInMapInfo objectName */
    objectName?: (string|null);

    /** ObjectInMapInfo hp */
    hp?: (number|null);

    /** ObjectInMapInfo level */
    level?: (number|null);

    /** ObjectInMapInfo objectType */
    objectType?: (string|null);
}

/** Represents an ObjectInMapInfo. */
export class ObjectInMapInfo implements IObjectInMapInfo {

    /**
     * Constructs a new ObjectInMapInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IObjectInMapInfo);

    /** ObjectInMapInfo objectId. */
    public objectId: (number|Long);

    /** ObjectInMapInfo objectName. */
    public objectName: string;

    /** ObjectInMapInfo hp. */
    public hp: number;

    /** ObjectInMapInfo level. */
    public level: number;

    /** ObjectInMapInfo objectType. */
    public objectType: string;

    /**
     * Creates a new ObjectInMapInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ObjectInMapInfo instance
     */
    public static create(properties?: IObjectInMapInfo): ObjectInMapInfo;

    /**
     * Encodes the specified ObjectInMapInfo message. Does not implicitly {@link ObjectInMapInfo.verify|verify} messages.
     * @param message ObjectInMapInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IObjectInMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ObjectInMapInfo message, length delimited. Does not implicitly {@link ObjectInMapInfo.verify|verify} messages.
     * @param message ObjectInMapInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IObjectInMapInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an ObjectInMapInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ObjectInMapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ObjectInMapInfo;

    /**
     * Decodes an ObjectInMapInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ObjectInMapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ObjectInMapInfo;

    /**
     * Verifies an ObjectInMapInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates an ObjectInMapInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ObjectInMapInfo
     */
    public static fromObject(object: { [k: string]: any }): ObjectInMapInfo;

    /**
     * Creates a plain object from an ObjectInMapInfo message. Also converts values to other types if specified.
     * @param message ObjectInMapInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ObjectInMapInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ObjectInMapInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RespBroadcastEnterWorldPacket. */
export interface IRespBroadcastEnterWorldPacket {

    /** RespBroadcastEnterWorldPacket mapId */
    mapId?: (number|Long|null);

    /** RespBroadcastEnterWorldPacket playerId */
    playerId?: (number|Long|null);

    /** RespBroadcastEnterWorldPacket result */
    result?: (string|null);
}

/** Represents a RespBroadcastEnterWorldPacket. */
export class RespBroadcastEnterWorldPacket implements IRespBroadcastEnterWorldPacket {

    /**
     * Constructs a new RespBroadcastEnterWorldPacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRespBroadcastEnterWorldPacket);

    /** RespBroadcastEnterWorldPacket mapId. */
    public mapId: (number|Long);

    /** RespBroadcastEnterWorldPacket playerId. */
    public playerId: (number|Long);

    /** RespBroadcastEnterWorldPacket result. */
    public result: string;

    /**
     * Creates a new RespBroadcastEnterWorldPacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RespBroadcastEnterWorldPacket instance
     */
    public static create(properties?: IRespBroadcastEnterWorldPacket): RespBroadcastEnterWorldPacket;

    /**
     * Encodes the specified RespBroadcastEnterWorldPacket message. Does not implicitly {@link RespBroadcastEnterWorldPacket.verify|verify} messages.
     * @param message RespBroadcastEnterWorldPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRespBroadcastEnterWorldPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RespBroadcastEnterWorldPacket message, length delimited. Does not implicitly {@link RespBroadcastEnterWorldPacket.verify|verify} messages.
     * @param message RespBroadcastEnterWorldPacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRespBroadcastEnterWorldPacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RespBroadcastEnterWorldPacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RespBroadcastEnterWorldPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RespBroadcastEnterWorldPacket;

    /**
     * Decodes a RespBroadcastEnterWorldPacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RespBroadcastEnterWorldPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RespBroadcastEnterWorldPacket;

    /**
     * Verifies a RespBroadcastEnterWorldPacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RespBroadcastEnterWorldPacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RespBroadcastEnterWorldPacket
     */
    public static fromObject(object: { [k: string]: any }): RespBroadcastEnterWorldPacket;

    /**
     * Creates a plain object from a RespBroadcastEnterWorldPacket message. Also converts values to other types if specified.
     * @param message RespBroadcastEnterWorldPacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RespBroadcastEnterWorldPacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RespBroadcastEnterWorldPacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ReqChangeMapInstancePacket. */
export interface IReqChangeMapInstancePacket {

    /** ReqChangeMapInstancePacket oldMapId */
    oldMapId?: (number|Long|null);

    /** ReqChangeMapInstancePacket newMapId */
    newMapId?: (number|Long|null);
}

/** Represents a ReqChangeMapInstancePacket. */
export class ReqChangeMapInstancePacket implements IReqChangeMapInstancePacket {

    /**
     * Constructs a new ReqChangeMapInstancePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReqChangeMapInstancePacket);

    /** ReqChangeMapInstancePacket oldMapId. */
    public oldMapId: (number|Long);

    /** ReqChangeMapInstancePacket newMapId. */
    public newMapId: (number|Long);

    /**
     * Creates a new ReqChangeMapInstancePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReqChangeMapInstancePacket instance
     */
    public static create(properties?: IReqChangeMapInstancePacket): ReqChangeMapInstancePacket;

    /**
     * Encodes the specified ReqChangeMapInstancePacket message. Does not implicitly {@link ReqChangeMapInstancePacket.verify|verify} messages.
     * @param message ReqChangeMapInstancePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReqChangeMapInstancePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReqChangeMapInstancePacket message, length delimited. Does not implicitly {@link ReqChangeMapInstancePacket.verify|verify} messages.
     * @param message ReqChangeMapInstancePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReqChangeMapInstancePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReqChangeMapInstancePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReqChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReqChangeMapInstancePacket;

    /**
     * Decodes a ReqChangeMapInstancePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReqChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReqChangeMapInstancePacket;

    /**
     * Verifies a ReqChangeMapInstancePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReqChangeMapInstancePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReqChangeMapInstancePacket
     */
    public static fromObject(object: { [k: string]: any }): ReqChangeMapInstancePacket;

    /**
     * Creates a plain object from a ReqChangeMapInstancePacket message. Also converts values to other types if specified.
     * @param message ReqChangeMapInstancePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReqChangeMapInstancePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReqChangeMapInstancePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
