import * as $protobuf from "protobufjs";

/** Properties of a ReqLoginPacket. */
export interface IReqLoginPacket {

    /** ReqLoginPacket userName */
    userName?: (string|null);

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

    /** ReqLoginPacket userName. */
    public userName: string;

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

/** Properties of a ReqLoginAuthPacket. */
export interface IReqLoginAuthPacket {

    /** ReqLoginAuthPacket userName */
    userName?: (string|null);

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

    /** ReqLoginAuthPacket userName. */
    public userName: string;

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
