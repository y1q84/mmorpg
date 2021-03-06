/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ReqLoginPacket = (function() {

    /**
     * Properties of a ReqLoginPacket.
     * @exports IReqLoginPacket
     * @interface IReqLoginPacket
     * @property {string|null} [account] ReqLoginPacket account
     * @property {string|null} [password] ReqLoginPacket password
     */

    /**
     * Constructs a new ReqLoginPacket.
     * @exports ReqLoginPacket
     * @classdesc Represents a ReqLoginPacket.
     * @implements IReqLoginPacket
     * @constructor
     * @param {IReqLoginPacket=} [properties] Properties to set
     */
    function ReqLoginPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqLoginPacket account.
     * @member {string} account
     * @memberof ReqLoginPacket
     * @instance
     */
    ReqLoginPacket.prototype.account = "";

    /**
     * ReqLoginPacket password.
     * @member {string} password
     * @memberof ReqLoginPacket
     * @instance
     */
    ReqLoginPacket.prototype.password = "";

    /**
     * Creates a new ReqLoginPacket instance using the specified properties.
     * @function create
     * @memberof ReqLoginPacket
     * @static
     * @param {IReqLoginPacket=} [properties] Properties to set
     * @returns {ReqLoginPacket} ReqLoginPacket instance
     */
    ReqLoginPacket.create = function create(properties) {
        return new ReqLoginPacket(properties);
    };

    /**
     * Encodes the specified ReqLoginPacket message. Does not implicitly {@link ReqLoginPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqLoginPacket
     * @static
     * @param {IReqLoginPacket} message ReqLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLoginPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && message.hasOwnProperty("account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        if (message.password != null && message.hasOwnProperty("password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified ReqLoginPacket message, length delimited. Does not implicitly {@link ReqLoginPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqLoginPacket
     * @static
     * @param {IReqLoginPacket} message ReqLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLoginPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqLoginPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqLoginPacket} ReqLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLoginPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqLoginPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqLoginPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqLoginPacket} ReqLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLoginPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqLoginPacket message.
     * @function verify
     * @memberof ReqLoginPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqLoginPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a ReqLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqLoginPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqLoginPacket} ReqLoginPacket
     */
    ReqLoginPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqLoginPacket)
            return object;
        var message = new $root.ReqLoginPacket();
        if (object.account != null)
            message.account = String(object.account);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a ReqLoginPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqLoginPacket
     * @static
     * @param {ReqLoginPacket} message ReqLoginPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqLoginPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.account = "";
            object.password = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this ReqLoginPacket to JSON.
     * @function toJSON
     * @memberof ReqLoginPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqLoginPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqLoginPacket;
})();

$root.ResLoginPacket = (function() {

    /**
     * Properties of a ResLoginPacket.
     * @exports IResLoginPacket
     * @interface IResLoginPacket
     * @property {string|null} [result] ResLoginPacket result
     * @property {Array.<IPlayerEntityInfo>|null} [playerEntityInfos] ResLoginPacket playerEntityInfos
     */

    /**
     * Constructs a new ResLoginPacket.
     * @exports ResLoginPacket
     * @classdesc Represents a ResLoginPacket.
     * @implements IResLoginPacket
     * @constructor
     * @param {IResLoginPacket=} [properties] Properties to set
     */
    function ResLoginPacket(properties) {
        this.playerEntityInfos = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResLoginPacket result.
     * @member {string} result
     * @memberof ResLoginPacket
     * @instance
     */
    ResLoginPacket.prototype.result = "";

    /**
     * ResLoginPacket playerEntityInfos.
     * @member {Array.<IPlayerEntityInfo>} playerEntityInfos
     * @memberof ResLoginPacket
     * @instance
     */
    ResLoginPacket.prototype.playerEntityInfos = $util.emptyArray;

    /**
     * Creates a new ResLoginPacket instance using the specified properties.
     * @function create
     * @memberof ResLoginPacket
     * @static
     * @param {IResLoginPacket=} [properties] Properties to set
     * @returns {ResLoginPacket} ResLoginPacket instance
     */
    ResLoginPacket.create = function create(properties) {
        return new ResLoginPacket(properties);
    };

    /**
     * Encodes the specified ResLoginPacket message. Does not implicitly {@link ResLoginPacket.verify|verify} messages.
     * @function encode
     * @memberof ResLoginPacket
     * @static
     * @param {IResLoginPacket} message ResLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResLoginPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        if (message.playerEntityInfos != null && message.playerEntityInfos.length)
            for (var i = 0; i < message.playerEntityInfos.length; ++i)
                $root.PlayerEntityInfo.encode(message.playerEntityInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ResLoginPacket message, length delimited. Does not implicitly {@link ResLoginPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResLoginPacket
     * @static
     * @param {IResLoginPacket} message ResLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResLoginPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResLoginPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ResLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResLoginPacket} ResLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResLoginPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResLoginPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            case 2:
                if (!(message.playerEntityInfos && message.playerEntityInfos.length))
                    message.playerEntityInfos = [];
                message.playerEntityInfos.push($root.PlayerEntityInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResLoginPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResLoginPacket} ResLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResLoginPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResLoginPacket message.
     * @function verify
     * @memberof ResLoginPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResLoginPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        if (message.playerEntityInfos != null && message.hasOwnProperty("playerEntityInfos")) {
            if (!Array.isArray(message.playerEntityInfos))
                return "playerEntityInfos: array expected";
            for (var i = 0; i < message.playerEntityInfos.length; ++i) {
                var error = $root.PlayerEntityInfo.verify(message.playerEntityInfos[i]);
                if (error)
                    return "playerEntityInfos." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ResLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResLoginPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResLoginPacket} ResLoginPacket
     */
    ResLoginPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ResLoginPacket)
            return object;
        var message = new $root.ResLoginPacket();
        if (object.result != null)
            message.result = String(object.result);
        if (object.playerEntityInfos) {
            if (!Array.isArray(object.playerEntityInfos))
                throw TypeError(".ResLoginPacket.playerEntityInfos: array expected");
            message.playerEntityInfos = [];
            for (var i = 0; i < object.playerEntityInfos.length; ++i) {
                if (typeof object.playerEntityInfos[i] !== "object")
                    throw TypeError(".ResLoginPacket.playerEntityInfos: object expected");
                message.playerEntityInfos[i] = $root.PlayerEntityInfo.fromObject(object.playerEntityInfos[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ResLoginPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResLoginPacket
     * @static
     * @param {ResLoginPacket} message ResLoginPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResLoginPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.playerEntityInfos = [];
        if (options.defaults)
            object.result = "";
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.playerEntityInfos && message.playerEntityInfos.length) {
            object.playerEntityInfos = [];
            for (var j = 0; j < message.playerEntityInfos.length; ++j)
                object.playerEntityInfos[j] = $root.PlayerEntityInfo.toObject(message.playerEntityInfos[j], options);
        }
        return object;
    };

    /**
     * Converts this ResLoginPacket to JSON.
     * @function toJSON
     * @memberof ResLoginPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResLoginPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ResLoginPacket;
})();

$root.PlayerEntityInfo = (function() {

    /**
     * Properties of a PlayerEntityInfo.
     * @exports IPlayerEntityInfo
     * @interface IPlayerEntityInfo
     * @property {number|Long|null} [id] PlayerEntityInfo id
     * @property {string|null} [sex] PlayerEntityInfo sex
     * @property {string|null} [name] PlayerEntityInfo name
     * @property {string|null} [roleType] PlayerEntityInfo roleType
     */

    /**
     * Constructs a new PlayerEntityInfo.
     * @exports PlayerEntityInfo
     * @classdesc Represents a PlayerEntityInfo.
     * @implements IPlayerEntityInfo
     * @constructor
     * @param {IPlayerEntityInfo=} [properties] Properties to set
     */
    function PlayerEntityInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerEntityInfo id.
     * @member {number|Long} id
     * @memberof PlayerEntityInfo
     * @instance
     */
    PlayerEntityInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerEntityInfo sex.
     * @member {string} sex
     * @memberof PlayerEntityInfo
     * @instance
     */
    PlayerEntityInfo.prototype.sex = "";

    /**
     * PlayerEntityInfo name.
     * @member {string} name
     * @memberof PlayerEntityInfo
     * @instance
     */
    PlayerEntityInfo.prototype.name = "";

    /**
     * PlayerEntityInfo roleType.
     * @member {string} roleType
     * @memberof PlayerEntityInfo
     * @instance
     */
    PlayerEntityInfo.prototype.roleType = "";

    /**
     * Creates a new PlayerEntityInfo instance using the specified properties.
     * @function create
     * @memberof PlayerEntityInfo
     * @static
     * @param {IPlayerEntityInfo=} [properties] Properties to set
     * @returns {PlayerEntityInfo} PlayerEntityInfo instance
     */
    PlayerEntityInfo.create = function create(properties) {
        return new PlayerEntityInfo(properties);
    };

    /**
     * Encodes the specified PlayerEntityInfo message. Does not implicitly {@link PlayerEntityInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerEntityInfo
     * @static
     * @param {IPlayerEntityInfo} message PlayerEntityInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerEntityInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sex);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.roleType);
        return writer;
    };

    /**
     * Encodes the specified PlayerEntityInfo message, length delimited. Does not implicitly {@link PlayerEntityInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerEntityInfo
     * @static
     * @param {IPlayerEntityInfo} message PlayerEntityInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerEntityInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerEntityInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerEntityInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerEntityInfo} PlayerEntityInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerEntityInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerEntityInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.sex = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.roleType = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerEntityInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerEntityInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerEntityInfo} PlayerEntityInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerEntityInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerEntityInfo message.
     * @function verify
     * @memberof PlayerEntityInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerEntityInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isString(message.sex))
                return "sex: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            if (!$util.isString(message.roleType))
                return "roleType: string expected";
        return null;
    };

    /**
     * Creates a PlayerEntityInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerEntityInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerEntityInfo} PlayerEntityInfo
     */
    PlayerEntityInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerEntityInfo)
            return object;
        var message = new $root.PlayerEntityInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.sex != null)
            message.sex = String(object.sex);
        if (object.name != null)
            message.name = String(object.name);
        if (object.roleType != null)
            message.roleType = String(object.roleType);
        return message;
    };

    /**
     * Creates a plain object from a PlayerEntityInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerEntityInfo
     * @static
     * @param {PlayerEntityInfo} message PlayerEntityInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerEntityInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.sex = "";
            object.name = "";
            object.roleType = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            object.roleType = message.roleType;
        return object;
    };

    /**
     * Converts this PlayerEntityInfo to JSON.
     * @function toJSON
     * @memberof PlayerEntityInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerEntityInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerEntityInfo;
})();

$root.ReqLoginAuthPacket = (function() {

    /**
     * Properties of a ReqLoginAuthPacket.
     * @exports IReqLoginAuthPacket
     * @interface IReqLoginAuthPacket
     * @property {string|null} [account] ReqLoginAuthPacket account
     * @property {string|null} [password] ReqLoginAuthPacket password
     * @property {string|null} [key] ReqLoginAuthPacket key
     */

    /**
     * Constructs a new ReqLoginAuthPacket.
     * @exports ReqLoginAuthPacket
     * @classdesc Represents a ReqLoginAuthPacket.
     * @implements IReqLoginAuthPacket
     * @constructor
     * @param {IReqLoginAuthPacket=} [properties] Properties to set
     */
    function ReqLoginAuthPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqLoginAuthPacket account.
     * @member {string} account
     * @memberof ReqLoginAuthPacket
     * @instance
     */
    ReqLoginAuthPacket.prototype.account = "";

    /**
     * ReqLoginAuthPacket password.
     * @member {string} password
     * @memberof ReqLoginAuthPacket
     * @instance
     */
    ReqLoginAuthPacket.prototype.password = "";

    /**
     * ReqLoginAuthPacket key.
     * @member {string} key
     * @memberof ReqLoginAuthPacket
     * @instance
     */
    ReqLoginAuthPacket.prototype.key = "";

    /**
     * Creates a new ReqLoginAuthPacket instance using the specified properties.
     * @function create
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {IReqLoginAuthPacket=} [properties] Properties to set
     * @returns {ReqLoginAuthPacket} ReqLoginAuthPacket instance
     */
    ReqLoginAuthPacket.create = function create(properties) {
        return new ReqLoginAuthPacket(properties);
    };

    /**
     * Encodes the specified ReqLoginAuthPacket message. Does not implicitly {@link ReqLoginAuthPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {IReqLoginAuthPacket} message ReqLoginAuthPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLoginAuthPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && message.hasOwnProperty("account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        if (message.password != null && message.hasOwnProperty("password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        if (message.key != null && message.hasOwnProperty("key"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.key);
        return writer;
    };

    /**
     * Encodes the specified ReqLoginAuthPacket message, length delimited. Does not implicitly {@link ReqLoginAuthPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {IReqLoginAuthPacket} message ReqLoginAuthPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqLoginAuthPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqLoginAuthPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqLoginAuthPacket} ReqLoginAuthPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLoginAuthPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqLoginAuthPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            case 3:
                message.key = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqLoginAuthPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqLoginAuthPacket} ReqLoginAuthPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqLoginAuthPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqLoginAuthPacket message.
     * @function verify
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqLoginAuthPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.key != null && message.hasOwnProperty("key"))
            if (!$util.isString(message.key))
                return "key: string expected";
        return null;
    };

    /**
     * Creates a ReqLoginAuthPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqLoginAuthPacket} ReqLoginAuthPacket
     */
    ReqLoginAuthPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqLoginAuthPacket)
            return object;
        var message = new $root.ReqLoginAuthPacket();
        if (object.account != null)
            message.account = String(object.account);
        if (object.password != null)
            message.password = String(object.password);
        if (object.key != null)
            message.key = String(object.key);
        return message;
    };

    /**
     * Creates a plain object from a ReqLoginAuthPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqLoginAuthPacket
     * @static
     * @param {ReqLoginAuthPacket} message ReqLoginAuthPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqLoginAuthPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.account = "";
            object.password = "";
            object.key = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.key != null && message.hasOwnProperty("key"))
            object.key = message.key;
        return object;
    };

    /**
     * Converts this ReqLoginAuthPacket to JSON.
     * @function toJSON
     * @memberof ReqLoginAuthPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqLoginAuthPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqLoginAuthPacket;
})();

$root.ReqRegisterPacket = (function() {

    /**
     * Properties of a ReqRegisterPacket.
     * @exports IReqRegisterPacket
     * @interface IReqRegisterPacket
     * @property {string|null} [account] ReqRegisterPacket account
     * @property {string|null} [password] ReqRegisterPacket password
     */

    /**
     * Constructs a new ReqRegisterPacket.
     * @exports ReqRegisterPacket
     * @classdesc Represents a ReqRegisterPacket.
     * @implements IReqRegisterPacket
     * @constructor
     * @param {IReqRegisterPacket=} [properties] Properties to set
     */
    function ReqRegisterPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRegisterPacket account.
     * @member {string} account
     * @memberof ReqRegisterPacket
     * @instance
     */
    ReqRegisterPacket.prototype.account = "";

    /**
     * ReqRegisterPacket password.
     * @member {string} password
     * @memberof ReqRegisterPacket
     * @instance
     */
    ReqRegisterPacket.prototype.password = "";

    /**
     * Creates a new ReqRegisterPacket instance using the specified properties.
     * @function create
     * @memberof ReqRegisterPacket
     * @static
     * @param {IReqRegisterPacket=} [properties] Properties to set
     * @returns {ReqRegisterPacket} ReqRegisterPacket instance
     */
    ReqRegisterPacket.create = function create(properties) {
        return new ReqRegisterPacket(properties);
    };

    /**
     * Encodes the specified ReqRegisterPacket message. Does not implicitly {@link ReqRegisterPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqRegisterPacket
     * @static
     * @param {IReqRegisterPacket} message ReqRegisterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegisterPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && message.hasOwnProperty("account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        if (message.password != null && message.hasOwnProperty("password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified ReqRegisterPacket message, length delimited. Does not implicitly {@link ReqRegisterPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRegisterPacket
     * @static
     * @param {IReqRegisterPacket} message ReqRegisterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRegisterPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRegisterPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRegisterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRegisterPacket} ReqRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegisterPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRegisterPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqRegisterPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRegisterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRegisterPacket} ReqRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRegisterPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRegisterPacket message.
     * @function verify
     * @memberof ReqRegisterPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRegisterPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a ReqRegisterPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRegisterPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRegisterPacket} ReqRegisterPacket
     */
    ReqRegisterPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRegisterPacket)
            return object;
        var message = new $root.ReqRegisterPacket();
        if (object.account != null)
            message.account = String(object.account);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a ReqRegisterPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRegisterPacket
     * @static
     * @param {ReqRegisterPacket} message ReqRegisterPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRegisterPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.account = "";
            object.password = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this ReqRegisterPacket to JSON.
     * @function toJSON
     * @memberof ReqRegisterPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRegisterPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRegisterPacket;
})();

$root.RespRegisterPacket = (function() {

    /**
     * Properties of a RespRegisterPacket.
     * @exports IRespRegisterPacket
     * @interface IRespRegisterPacket
     * @property {string|null} [result] RespRegisterPacket result
     */

    /**
     * Constructs a new RespRegisterPacket.
     * @exports RespRegisterPacket
     * @classdesc Represents a RespRegisterPacket.
     * @implements IRespRegisterPacket
     * @constructor
     * @param {IRespRegisterPacket=} [properties] Properties to set
     */
    function RespRegisterPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespRegisterPacket result.
     * @member {string} result
     * @memberof RespRegisterPacket
     * @instance
     */
    RespRegisterPacket.prototype.result = "";

    /**
     * Creates a new RespRegisterPacket instance using the specified properties.
     * @function create
     * @memberof RespRegisterPacket
     * @static
     * @param {IRespRegisterPacket=} [properties] Properties to set
     * @returns {RespRegisterPacket} RespRegisterPacket instance
     */
    RespRegisterPacket.create = function create(properties) {
        return new RespRegisterPacket(properties);
    };

    /**
     * Encodes the specified RespRegisterPacket message. Does not implicitly {@link RespRegisterPacket.verify|verify} messages.
     * @function encode
     * @memberof RespRegisterPacket
     * @static
     * @param {IRespRegisterPacket} message RespRegisterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRegisterPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespRegisterPacket message, length delimited. Does not implicitly {@link RespRegisterPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespRegisterPacket
     * @static
     * @param {IRespRegisterPacket} message RespRegisterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRegisterPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespRegisterPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespRegisterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespRegisterPacket} RespRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRegisterPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespRegisterPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespRegisterPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespRegisterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespRegisterPacket} RespRegisterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRegisterPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespRegisterPacket message.
     * @function verify
     * @memberof RespRegisterPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespRegisterPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        return null;
    };

    /**
     * Creates a RespRegisterPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespRegisterPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespRegisterPacket} RespRegisterPacket
     */
    RespRegisterPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespRegisterPacket)
            return object;
        var message = new $root.RespRegisterPacket();
        if (object.result != null)
            message.result = String(object.result);
        return message;
    };

    /**
     * Creates a plain object from a RespRegisterPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespRegisterPacket
     * @static
     * @param {RespRegisterPacket} message RespRegisterPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespRegisterPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.result = "";
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this RespRegisterPacket to JSON.
     * @function toJSON
     * @memberof RespRegisterPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespRegisterPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespRegisterPacket;
})();

$root.ReqCreateRolePacket = (function() {

    /**
     * Properties of a ReqCreateRolePacket.
     * @exports IReqCreateRolePacket
     * @interface IReqCreateRolePacket
     * @property {string|null} [playerName] ReqCreateRolePacket playerName
     * @property {string|null} [sex] ReqCreateRolePacket sex
     * @property {RoleType|null} [roleType] ReqCreateRolePacket roleType
     */

    /**
     * Constructs a new ReqCreateRolePacket.
     * @exports ReqCreateRolePacket
     * @classdesc Represents a ReqCreateRolePacket.
     * @implements IReqCreateRolePacket
     * @constructor
     * @param {IReqCreateRolePacket=} [properties] Properties to set
     */
    function ReqCreateRolePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqCreateRolePacket playerName.
     * @member {string} playerName
     * @memberof ReqCreateRolePacket
     * @instance
     */
    ReqCreateRolePacket.prototype.playerName = "";

    /**
     * ReqCreateRolePacket sex.
     * @member {string} sex
     * @memberof ReqCreateRolePacket
     * @instance
     */
    ReqCreateRolePacket.prototype.sex = "";

    /**
     * ReqCreateRolePacket roleType.
     * @member {RoleType} roleType
     * @memberof ReqCreateRolePacket
     * @instance
     */
    ReqCreateRolePacket.prototype.roleType = 0;

    /**
     * Creates a new ReqCreateRolePacket instance using the specified properties.
     * @function create
     * @memberof ReqCreateRolePacket
     * @static
     * @param {IReqCreateRolePacket=} [properties] Properties to set
     * @returns {ReqCreateRolePacket} ReqCreateRolePacket instance
     */
    ReqCreateRolePacket.create = function create(properties) {
        return new ReqCreateRolePacket(properties);
    };

    /**
     * Encodes the specified ReqCreateRolePacket message. Does not implicitly {@link ReqCreateRolePacket.verify|verify} messages.
     * @function encode
     * @memberof ReqCreateRolePacket
     * @static
     * @param {IReqCreateRolePacket} message ReqCreateRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCreateRolePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.playerName);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sex);
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roleType);
        return writer;
    };

    /**
     * Encodes the specified ReqCreateRolePacket message, length delimited. Does not implicitly {@link ReqCreateRolePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqCreateRolePacket
     * @static
     * @param {IReqCreateRolePacket} message ReqCreateRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqCreateRolePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqCreateRolePacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqCreateRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqCreateRolePacket} ReqCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCreateRolePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqCreateRolePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerName = reader.string();
                break;
            case 2:
                message.sex = reader.string();
                break;
            case 3:
                message.roleType = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqCreateRolePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqCreateRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqCreateRolePacket} ReqCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqCreateRolePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqCreateRolePacket message.
     * @function verify
     * @memberof ReqCreateRolePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqCreateRolePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isString(message.sex))
                return "sex: string expected";
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            switch (message.roleType) {
            default:
                return "roleType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a ReqCreateRolePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqCreateRolePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqCreateRolePacket} ReqCreateRolePacket
     */
    ReqCreateRolePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqCreateRolePacket)
            return object;
        var message = new $root.ReqCreateRolePacket();
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.sex != null)
            message.sex = String(object.sex);
        switch (object.roleType) {
        case "WARRIOR":
        case 0:
            message.roleType = 0;
            break;
        case "MASTER":
        case 1:
            message.roleType = 1;
            break;
        case "TAOIST":
        case 2:
            message.roleType = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a ReqCreateRolePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqCreateRolePacket
     * @static
     * @param {ReqCreateRolePacket} message ReqCreateRolePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqCreateRolePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.playerName = "";
            object.sex = "";
            object.roleType = options.enums === String ? "WARRIOR" : 0;
        }
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            object.roleType = options.enums === String ? $root.RoleType[message.roleType] : message.roleType;
        return object;
    };

    /**
     * Converts this ReqCreateRolePacket to JSON.
     * @function toJSON
     * @memberof ReqCreateRolePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqCreateRolePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqCreateRolePacket;
})();

/**
 * RoleType enum.
 * @exports RoleType
 * @enum {string}
 * @property {number} WARRIOR=0 WARRIOR value
 * @property {number} MASTER=1 MASTER value
 * @property {number} TAOIST=2 TAOIST value
 */
$root.RoleType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WARRIOR"] = 0;
    values[valuesById[1] = "MASTER"] = 1;
    values[valuesById[2] = "TAOIST"] = 2;
    return values;
})();

$root.RespCreateRolePacket = (function() {

    /**
     * Properties of a RespCreateRolePacket.
     * @exports IRespCreateRolePacket
     * @interface IRespCreateRolePacket
     * @property {string|null} [result] RespCreateRolePacket result
     * @property {number|Long|null} [playerId] RespCreateRolePacket playerId
     * @property {IRoleCreateInfo|null} [roleCreateInfo] RespCreateRolePacket roleCreateInfo
     */

    /**
     * Constructs a new RespCreateRolePacket.
     * @exports RespCreateRolePacket
     * @classdesc Represents a RespCreateRolePacket.
     * @implements IRespCreateRolePacket
     * @constructor
     * @param {IRespCreateRolePacket=} [properties] Properties to set
     */
    function RespCreateRolePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespCreateRolePacket result.
     * @member {string} result
     * @memberof RespCreateRolePacket
     * @instance
     */
    RespCreateRolePacket.prototype.result = "";

    /**
     * RespCreateRolePacket playerId.
     * @member {number|Long} playerId
     * @memberof RespCreateRolePacket
     * @instance
     */
    RespCreateRolePacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespCreateRolePacket roleCreateInfo.
     * @member {IRoleCreateInfo|null|undefined} roleCreateInfo
     * @memberof RespCreateRolePacket
     * @instance
     */
    RespCreateRolePacket.prototype.roleCreateInfo = null;

    /**
     * Creates a new RespCreateRolePacket instance using the specified properties.
     * @function create
     * @memberof RespCreateRolePacket
     * @static
     * @param {IRespCreateRolePacket=} [properties] Properties to set
     * @returns {RespCreateRolePacket} RespCreateRolePacket instance
     */
    RespCreateRolePacket.create = function create(properties) {
        return new RespCreateRolePacket(properties);
    };

    /**
     * Encodes the specified RespCreateRolePacket message. Does not implicitly {@link RespCreateRolePacket.verify|verify} messages.
     * @function encode
     * @memberof RespCreateRolePacket
     * @static
     * @param {IRespCreateRolePacket} message RespCreateRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespCreateRolePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
        if (message.roleCreateInfo != null && message.hasOwnProperty("roleCreateInfo"))
            $root.RoleCreateInfo.encode(message.roleCreateInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RespCreateRolePacket message, length delimited. Does not implicitly {@link RespCreateRolePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespCreateRolePacket
     * @static
     * @param {IRespCreateRolePacket} message RespCreateRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespCreateRolePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespCreateRolePacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespCreateRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespCreateRolePacket} RespCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespCreateRolePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespCreateRolePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            case 2:
                message.playerId = reader.int64();
                break;
            case 3:
                message.roleCreateInfo = $root.RoleCreateInfo.decode(reader, reader.uint32());
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespCreateRolePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespCreateRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespCreateRolePacket} RespCreateRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespCreateRolePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespCreateRolePacket message.
     * @function verify
     * @memberof RespCreateRolePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespCreateRolePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.roleCreateInfo != null && message.hasOwnProperty("roleCreateInfo")) {
            var error = $root.RoleCreateInfo.verify(message.roleCreateInfo);
            if (error)
                return "roleCreateInfo." + error;
        }
        return null;
    };

    /**
     * Creates a RespCreateRolePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespCreateRolePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespCreateRolePacket} RespCreateRolePacket
     */
    RespCreateRolePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespCreateRolePacket)
            return object;
        var message = new $root.RespCreateRolePacket();
        if (object.result != null)
            message.result = String(object.result);
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.roleCreateInfo != null) {
            if (typeof object.roleCreateInfo !== "object")
                throw TypeError(".RespCreateRolePacket.roleCreateInfo: object expected");
            message.roleCreateInfo = $root.RoleCreateInfo.fromObject(object.roleCreateInfo);
        }
        return message;
    };

    /**
     * Creates a plain object from a RespCreateRolePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespCreateRolePacket
     * @static
     * @param {RespCreateRolePacket} message RespCreateRolePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespCreateRolePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.result = "";
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.roleCreateInfo = null;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.roleCreateInfo != null && message.hasOwnProperty("roleCreateInfo"))
            object.roleCreateInfo = $root.RoleCreateInfo.toObject(message.roleCreateInfo, options);
        return object;
    };

    /**
     * Converts this RespCreateRolePacket to JSON.
     * @function toJSON
     * @memberof RespCreateRolePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespCreateRolePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespCreateRolePacket;
})();

$root.RoleCreateInfo = (function() {

    /**
     * Properties of a RoleCreateInfo.
     * @exports IRoleCreateInfo
     * @interface IRoleCreateInfo
     * @property {number|Long|null} [id] RoleCreateInfo id
     * @property {string|null} [sex] RoleCreateInfo sex
     * @property {string|null} [name] RoleCreateInfo name
     * @property {string|null} [roleType] RoleCreateInfo roleType
     */

    /**
     * Constructs a new RoleCreateInfo.
     * @exports RoleCreateInfo
     * @classdesc Represents a RoleCreateInfo.
     * @implements IRoleCreateInfo
     * @constructor
     * @param {IRoleCreateInfo=} [properties] Properties to set
     */
    function RoleCreateInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoleCreateInfo id.
     * @member {number|Long} id
     * @memberof RoleCreateInfo
     * @instance
     */
    RoleCreateInfo.prototype.id = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RoleCreateInfo sex.
     * @member {string} sex
     * @memberof RoleCreateInfo
     * @instance
     */
    RoleCreateInfo.prototype.sex = "";

    /**
     * RoleCreateInfo name.
     * @member {string} name
     * @memberof RoleCreateInfo
     * @instance
     */
    RoleCreateInfo.prototype.name = "";

    /**
     * RoleCreateInfo roleType.
     * @member {string} roleType
     * @memberof RoleCreateInfo
     * @instance
     */
    RoleCreateInfo.prototype.roleType = "";

    /**
     * Creates a new RoleCreateInfo instance using the specified properties.
     * @function create
     * @memberof RoleCreateInfo
     * @static
     * @param {IRoleCreateInfo=} [properties] Properties to set
     * @returns {RoleCreateInfo} RoleCreateInfo instance
     */
    RoleCreateInfo.create = function create(properties) {
        return new RoleCreateInfo(properties);
    };

    /**
     * Encodes the specified RoleCreateInfo message. Does not implicitly {@link RoleCreateInfo.verify|verify} messages.
     * @function encode
     * @memberof RoleCreateInfo
     * @static
     * @param {IRoleCreateInfo} message RoleCreateInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleCreateInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && message.hasOwnProperty("id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.id);
        if (message.sex != null && message.hasOwnProperty("sex"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sex);
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.roleType);
        return writer;
    };

    /**
     * Encodes the specified RoleCreateInfo message, length delimited. Does not implicitly {@link RoleCreateInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoleCreateInfo
     * @static
     * @param {IRoleCreateInfo} message RoleCreateInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoleCreateInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoleCreateInfo message from the specified reader or buffer.
     * @function decode
     * @memberof RoleCreateInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoleCreateInfo} RoleCreateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleCreateInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoleCreateInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.id = reader.int64();
                break;
            case 2:
                message.sex = reader.string();
                break;
            case 3:
                message.name = reader.string();
                break;
            case 4:
                message.roleType = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoleCreateInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoleCreateInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoleCreateInfo} RoleCreateInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoleCreateInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoleCreateInfo message.
     * @function verify
     * @memberof RoleCreateInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoleCreateInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id) && !(message.id && $util.isInteger(message.id.low) && $util.isInteger(message.id.high)))
                return "id: integer|Long expected";
        if (message.sex != null && message.hasOwnProperty("sex"))
            if (!$util.isString(message.sex))
                return "sex: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            if (!$util.isString(message.roleType))
                return "roleType: string expected";
        return null;
    };

    /**
     * Creates a RoleCreateInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoleCreateInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoleCreateInfo} RoleCreateInfo
     */
    RoleCreateInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.RoleCreateInfo)
            return object;
        var message = new $root.RoleCreateInfo();
        if (object.id != null)
            if ($util.Long)
                (message.id = $util.Long.fromValue(object.id)).unsigned = false;
            else if (typeof object.id === "string")
                message.id = parseInt(object.id, 10);
            else if (typeof object.id === "number")
                message.id = object.id;
            else if (typeof object.id === "object")
                message.id = new $util.LongBits(object.id.low >>> 0, object.id.high >>> 0).toNumber();
        if (object.sex != null)
            message.sex = String(object.sex);
        if (object.name != null)
            message.name = String(object.name);
        if (object.roleType != null)
            message.roleType = String(object.roleType);
        return message;
    };

    /**
     * Creates a plain object from a RoleCreateInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoleCreateInfo
     * @static
     * @param {RoleCreateInfo} message RoleCreateInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoleCreateInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.id = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.id = options.longs === String ? "0" : 0;
            object.sex = "";
            object.name = "";
            object.roleType = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            if (typeof message.id === "number")
                object.id = options.longs === String ? String(message.id) : message.id;
            else
                object.id = options.longs === String ? $util.Long.prototype.toString.call(message.id) : options.longs === Number ? new $util.LongBits(message.id.low >>> 0, message.id.high >>> 0).toNumber() : message.id;
        if (message.sex != null && message.hasOwnProperty("sex"))
            object.sex = message.sex;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            object.roleType = message.roleType;
        return object;
    };

    /**
     * Converts this RoleCreateInfo to JSON.
     * @function toJSON
     * @memberof RoleCreateInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoleCreateInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RoleCreateInfo;
})();

$root.ReqRoleLoginPacket = (function() {

    /**
     * Properties of a ReqRoleLoginPacket.
     * @exports IReqRoleLoginPacket
     * @interface IReqRoleLoginPacket
     * @property {number|Long|null} [playerId] ReqRoleLoginPacket playerId
     */

    /**
     * Constructs a new ReqRoleLoginPacket.
     * @exports ReqRoleLoginPacket
     * @classdesc Represents a ReqRoleLoginPacket.
     * @implements IReqRoleLoginPacket
     * @constructor
     * @param {IReqRoleLoginPacket=} [properties] Properties to set
     */
    function ReqRoleLoginPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqRoleLoginPacket playerId.
     * @member {number|Long} playerId
     * @memberof ReqRoleLoginPacket
     * @instance
     */
    ReqRoleLoginPacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReqRoleLoginPacket instance using the specified properties.
     * @function create
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {IReqRoleLoginPacket=} [properties] Properties to set
     * @returns {ReqRoleLoginPacket} ReqRoleLoginPacket instance
     */
    ReqRoleLoginPacket.create = function create(properties) {
        return new ReqRoleLoginPacket(properties);
    };

    /**
     * Encodes the specified ReqRoleLoginPacket message. Does not implicitly {@link ReqRoleLoginPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {IReqRoleLoginPacket} message ReqRoleLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRoleLoginPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        return writer;
    };

    /**
     * Encodes the specified ReqRoleLoginPacket message, length delimited. Does not implicitly {@link ReqRoleLoginPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {IReqRoleLoginPacket} message ReqRoleLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqRoleLoginPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqRoleLoginPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqRoleLoginPacket} ReqRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRoleLoginPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqRoleLoginPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqRoleLoginPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqRoleLoginPacket} ReqRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqRoleLoginPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqRoleLoginPacket message.
     * @function verify
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqRoleLoginPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReqRoleLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqRoleLoginPacket} ReqRoleLoginPacket
     */
    ReqRoleLoginPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqRoleLoginPacket)
            return object;
        var message = new $root.ReqRoleLoginPacket();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReqRoleLoginPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqRoleLoginPacket
     * @static
     * @param {ReqRoleLoginPacket} message ReqRoleLoginPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqRoleLoginPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        return object;
    };

    /**
     * Converts this ReqRoleLoginPacket to JSON.
     * @function toJSON
     * @memberof ReqRoleLoginPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqRoleLoginPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqRoleLoginPacket;
})();

$root.RespRoleLoginPacket = (function() {

    /**
     * Properties of a RespRoleLoginPacket.
     * @exports IRespRoleLoginPacket
     * @interface IRespRoleLoginPacket
     * @property {number|Long|null} [playerId] RespRoleLoginPacket playerId
     * @property {string|null} [result] RespRoleLoginPacket result
     */

    /**
     * Constructs a new RespRoleLoginPacket.
     * @exports RespRoleLoginPacket
     * @classdesc Represents a RespRoleLoginPacket.
     * @implements IRespRoleLoginPacket
     * @constructor
     * @param {IRespRoleLoginPacket=} [properties] Properties to set
     */
    function RespRoleLoginPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespRoleLoginPacket playerId.
     * @member {number|Long} playerId
     * @memberof RespRoleLoginPacket
     * @instance
     */
    RespRoleLoginPacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespRoleLoginPacket result.
     * @member {string} result
     * @memberof RespRoleLoginPacket
     * @instance
     */
    RespRoleLoginPacket.prototype.result = "";

    /**
     * Creates a new RespRoleLoginPacket instance using the specified properties.
     * @function create
     * @memberof RespRoleLoginPacket
     * @static
     * @param {IRespRoleLoginPacket=} [properties] Properties to set
     * @returns {RespRoleLoginPacket} RespRoleLoginPacket instance
     */
    RespRoleLoginPacket.create = function create(properties) {
        return new RespRoleLoginPacket(properties);
    };

    /**
     * Encodes the specified RespRoleLoginPacket message. Does not implicitly {@link RespRoleLoginPacket.verify|verify} messages.
     * @function encode
     * @memberof RespRoleLoginPacket
     * @static
     * @param {IRespRoleLoginPacket} message RespRoleLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRoleLoginPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespRoleLoginPacket message, length delimited. Does not implicitly {@link RespRoleLoginPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespRoleLoginPacket
     * @static
     * @param {IRespRoleLoginPacket} message RespRoleLoginPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRoleLoginPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespRoleLoginPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespRoleLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespRoleLoginPacket} RespRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRoleLoginPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespRoleLoginPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int64();
                break;
            case 2:
                message.result = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespRoleLoginPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespRoleLoginPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespRoleLoginPacket} RespRoleLoginPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRoleLoginPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespRoleLoginPacket message.
     * @function verify
     * @memberof RespRoleLoginPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespRoleLoginPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        return null;
    };

    /**
     * Creates a RespRoleLoginPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespRoleLoginPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespRoleLoginPacket} RespRoleLoginPacket
     */
    RespRoleLoginPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespRoleLoginPacket)
            return object;
        var message = new $root.RespRoleLoginPacket();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.result != null)
            message.result = String(object.result);
        return message;
    };

    /**
     * Creates a plain object from a RespRoleLoginPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespRoleLoginPacket
     * @static
     * @param {RespRoleLoginPacket} message RespRoleLoginPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespRoleLoginPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.result = "";
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this RespRoleLoginPacket to JSON.
     * @function toJSON
     * @memberof RespRoleLoginPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespRoleLoginPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespRoleLoginPacket;
})();

$root.RespRemoveRolePacket = (function() {

    /**
     * Properties of a RespRemoveRolePacket.
     * @exports IRespRemoveRolePacket
     * @interface IRespRemoveRolePacket
     * @property {string|null} [reason] RespRemoveRolePacket reason
     */

    /**
     * Constructs a new RespRemoveRolePacket.
     * @exports RespRemoveRolePacket
     * @classdesc Represents a RespRemoveRolePacket.
     * @implements IRespRemoveRolePacket
     * @constructor
     * @param {IRespRemoveRolePacket=} [properties] Properties to set
     */
    function RespRemoveRolePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespRemoveRolePacket reason.
     * @member {string} reason
     * @memberof RespRemoveRolePacket
     * @instance
     */
    RespRemoveRolePacket.prototype.reason = "";

    /**
     * Creates a new RespRemoveRolePacket instance using the specified properties.
     * @function create
     * @memberof RespRemoveRolePacket
     * @static
     * @param {IRespRemoveRolePacket=} [properties] Properties to set
     * @returns {RespRemoveRolePacket} RespRemoveRolePacket instance
     */
    RespRemoveRolePacket.create = function create(properties) {
        return new RespRemoveRolePacket(properties);
    };

    /**
     * Encodes the specified RespRemoveRolePacket message. Does not implicitly {@link RespRemoveRolePacket.verify|verify} messages.
     * @function encode
     * @memberof RespRemoveRolePacket
     * @static
     * @param {IRespRemoveRolePacket} message RespRemoveRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRemoveRolePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reason != null && message.hasOwnProperty("reason"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.reason);
        return writer;
    };

    /**
     * Encodes the specified RespRemoveRolePacket message, length delimited. Does not implicitly {@link RespRemoveRolePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespRemoveRolePacket
     * @static
     * @param {IRespRemoveRolePacket} message RespRemoveRolePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespRemoveRolePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespRemoveRolePacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespRemoveRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespRemoveRolePacket} RespRemoveRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRemoveRolePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespRemoveRolePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.reason = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespRemoveRolePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespRemoveRolePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespRemoveRolePacket} RespRemoveRolePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespRemoveRolePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespRemoveRolePacket message.
     * @function verify
     * @memberof RespRemoveRolePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespRemoveRolePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reason != null && message.hasOwnProperty("reason"))
            if (!$util.isString(message.reason))
                return "reason: string expected";
        return null;
    };

    /**
     * Creates a RespRemoveRolePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespRemoveRolePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespRemoveRolePacket} RespRemoveRolePacket
     */
    RespRemoveRolePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespRemoveRolePacket)
            return object;
        var message = new $root.RespRemoveRolePacket();
        if (object.reason != null)
            message.reason = String(object.reason);
        return message;
    };

    /**
     * Creates a plain object from a RespRemoveRolePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespRemoveRolePacket
     * @static
     * @param {RespRemoveRolePacket} message RespRemoveRolePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespRemoveRolePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reason = "";
        if (message.reason != null && message.hasOwnProperty("reason"))
            object.reason = message.reason;
        return object;
    };

    /**
     * Converts this RespRemoveRolePacket to JSON.
     * @function toJSON
     * @memberof RespRemoveRolePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespRemoveRolePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespRemoveRolePacket;
})();

$root.ReqEnterScenePacket = (function() {

    /**
     * Properties of a ReqEnterScenePacket.
     * @exports IReqEnterScenePacket
     * @interface IReqEnterScenePacket
     * @property {number|Long|null} [playerId] ReqEnterScenePacket playerId
     * @property {number|Long|null} [sceneId] ReqEnterScenePacket sceneId
     */

    /**
     * Constructs a new ReqEnterScenePacket.
     * @exports ReqEnterScenePacket
     * @classdesc Represents a ReqEnterScenePacket.
     * @implements IReqEnterScenePacket
     * @constructor
     * @param {IReqEnterScenePacket=} [properties] Properties to set
     */
    function ReqEnterScenePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqEnterScenePacket playerId.
     * @member {number|Long} playerId
     * @memberof ReqEnterScenePacket
     * @instance
     */
    ReqEnterScenePacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqEnterScenePacket sceneId.
     * @member {number|Long} sceneId
     * @memberof ReqEnterScenePacket
     * @instance
     */
    ReqEnterScenePacket.prototype.sceneId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReqEnterScenePacket instance using the specified properties.
     * @function create
     * @memberof ReqEnterScenePacket
     * @static
     * @param {IReqEnterScenePacket=} [properties] Properties to set
     * @returns {ReqEnterScenePacket} ReqEnterScenePacket instance
     */
    ReqEnterScenePacket.create = function create(properties) {
        return new ReqEnterScenePacket(properties);
    };

    /**
     * Encodes the specified ReqEnterScenePacket message. Does not implicitly {@link ReqEnterScenePacket.verify|verify} messages.
     * @function encode
     * @memberof ReqEnterScenePacket
     * @static
     * @param {IReqEnterScenePacket} message ReqEnterScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqEnterScenePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sceneId);
        return writer;
    };

    /**
     * Encodes the specified ReqEnterScenePacket message, length delimited. Does not implicitly {@link ReqEnterScenePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqEnterScenePacket
     * @static
     * @param {IReqEnterScenePacket} message ReqEnterScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqEnterScenePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqEnterScenePacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqEnterScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqEnterScenePacket} ReqEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqEnterScenePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqEnterScenePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int64();
                break;
            case 2:
                message.sceneId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqEnterScenePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqEnterScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqEnterScenePacket} ReqEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqEnterScenePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqEnterScenePacket message.
     * @function verify
     * @memberof ReqEnterScenePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqEnterScenePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (!$util.isInteger(message.sceneId) && !(message.sceneId && $util.isInteger(message.sceneId.low) && $util.isInteger(message.sceneId.high)))
                return "sceneId: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReqEnterScenePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqEnterScenePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqEnterScenePacket} ReqEnterScenePacket
     */
    ReqEnterScenePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqEnterScenePacket)
            return object;
        var message = new $root.ReqEnterScenePacket();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.sceneId != null)
            if ($util.Long)
                (message.sceneId = $util.Long.fromValue(object.sceneId)).unsigned = false;
            else if (typeof object.sceneId === "string")
                message.sceneId = parseInt(object.sceneId, 10);
            else if (typeof object.sceneId === "number")
                message.sceneId = object.sceneId;
            else if (typeof object.sceneId === "object")
                message.sceneId = new $util.LongBits(object.sceneId.low >>> 0, object.sceneId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReqEnterScenePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqEnterScenePacket
     * @static
     * @param {ReqEnterScenePacket} message ReqEnterScenePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqEnterScenePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sceneId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sceneId = options.longs === String ? "0" : 0;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (typeof message.sceneId === "number")
                object.sceneId = options.longs === String ? String(message.sceneId) : message.sceneId;
            else
                object.sceneId = options.longs === String ? $util.Long.prototype.toString.call(message.sceneId) : options.longs === Number ? new $util.LongBits(message.sceneId.low >>> 0, message.sceneId.high >>> 0).toNumber() : message.sceneId;
        return object;
    };

    /**
     * Converts this ReqEnterScenePacket to JSON.
     * @function toJSON
     * @memberof ReqEnterScenePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqEnterScenePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqEnterScenePacket;
})();

$root.RespEnterScenePacket = (function() {

    /**
     * Properties of a RespEnterScenePacket.
     * @exports IRespEnterScenePacket
     * @interface IRespEnterScenePacket
     * @property {number|Long|null} [sceneId] RespEnterScenePacket sceneId
     * @property {Array.<number|Long>|null} [sceneIds] RespEnterScenePacket sceneIds
     * @property {Array.<IObjectInMapInfo>|null} [mapObject] RespEnterScenePacket mapObject
     */

    /**
     * Constructs a new RespEnterScenePacket.
     * @exports RespEnterScenePacket
     * @classdesc Represents a RespEnterScenePacket.
     * @implements IRespEnterScenePacket
     * @constructor
     * @param {IRespEnterScenePacket=} [properties] Properties to set
     */
    function RespEnterScenePacket(properties) {
        this.sceneIds = [];
        this.mapObject = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespEnterScenePacket sceneId.
     * @member {number|Long} sceneId
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.sceneId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespEnterScenePacket sceneIds.
     * @member {Array.<number|Long>} sceneIds
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.sceneIds = $util.emptyArray;

    /**
     * RespEnterScenePacket mapObject.
     * @member {Array.<IObjectInMapInfo>} mapObject
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.mapObject = $util.emptyArray;

    /**
     * Creates a new RespEnterScenePacket instance using the specified properties.
     * @function create
     * @memberof RespEnterScenePacket
     * @static
     * @param {IRespEnterScenePacket=} [properties] Properties to set
     * @returns {RespEnterScenePacket} RespEnterScenePacket instance
     */
    RespEnterScenePacket.create = function create(properties) {
        return new RespEnterScenePacket(properties);
    };

    /**
     * Encodes the specified RespEnterScenePacket message. Does not implicitly {@link RespEnterScenePacket.verify|verify} messages.
     * @function encode
     * @memberof RespEnterScenePacket
     * @static
     * @param {IRespEnterScenePacket} message RespEnterScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespEnterScenePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.sceneId);
        if (message.sceneIds != null && message.sceneIds.length)
            for (var i = 0; i < message.sceneIds.length; ++i)
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sceneIds[i]);
        if (message.mapObject != null && message.mapObject.length)
            for (var i = 0; i < message.mapObject.length; ++i)
                $root.ObjectInMapInfo.encode(message.mapObject[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RespEnterScenePacket message, length delimited. Does not implicitly {@link RespEnterScenePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespEnterScenePacket
     * @static
     * @param {IRespEnterScenePacket} message RespEnterScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespEnterScenePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespEnterScenePacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespEnterScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespEnterScenePacket} RespEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespEnterScenePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespEnterScenePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.sceneId = reader.int64();
                break;
            case 2:
                if (!(message.sceneIds && message.sceneIds.length))
                    message.sceneIds = [];
                if ((tag & 7) === 2) {
                    var end2 = reader.uint32() + reader.pos;
                    while (reader.pos < end2)
                        message.sceneIds.push(reader.int64());
                } else
                    message.sceneIds.push(reader.int64());
                break;
            case 3:
                if (!(message.mapObject && message.mapObject.length))
                    message.mapObject = [];
                message.mapObject.push($root.ObjectInMapInfo.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespEnterScenePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespEnterScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespEnterScenePacket} RespEnterScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespEnterScenePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespEnterScenePacket message.
     * @function verify
     * @memberof RespEnterScenePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespEnterScenePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (!$util.isInteger(message.sceneId) && !(message.sceneId && $util.isInteger(message.sceneId.low) && $util.isInteger(message.sceneId.high)))
                return "sceneId: integer|Long expected";
        if (message.sceneIds != null && message.hasOwnProperty("sceneIds")) {
            if (!Array.isArray(message.sceneIds))
                return "sceneIds: array expected";
            for (var i = 0; i < message.sceneIds.length; ++i)
                if (!$util.isInteger(message.sceneIds[i]) && !(message.sceneIds[i] && $util.isInteger(message.sceneIds[i].low) && $util.isInteger(message.sceneIds[i].high)))
                    return "sceneIds: integer|Long[] expected";
        }
        if (message.mapObject != null && message.hasOwnProperty("mapObject")) {
            if (!Array.isArray(message.mapObject))
                return "mapObject: array expected";
            for (var i = 0; i < message.mapObject.length; ++i) {
                var error = $root.ObjectInMapInfo.verify(message.mapObject[i]);
                if (error)
                    return "mapObject." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RespEnterScenePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespEnterScenePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespEnterScenePacket} RespEnterScenePacket
     */
    RespEnterScenePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespEnterScenePacket)
            return object;
        var message = new $root.RespEnterScenePacket();
        if (object.sceneId != null)
            if ($util.Long)
                (message.sceneId = $util.Long.fromValue(object.sceneId)).unsigned = false;
            else if (typeof object.sceneId === "string")
                message.sceneId = parseInt(object.sceneId, 10);
            else if (typeof object.sceneId === "number")
                message.sceneId = object.sceneId;
            else if (typeof object.sceneId === "object")
                message.sceneId = new $util.LongBits(object.sceneId.low >>> 0, object.sceneId.high >>> 0).toNumber();
        if (object.sceneIds) {
            if (!Array.isArray(object.sceneIds))
                throw TypeError(".RespEnterScenePacket.sceneIds: array expected");
            message.sceneIds = [];
            for (var i = 0; i < object.sceneIds.length; ++i)
                if ($util.Long)
                    (message.sceneIds[i] = $util.Long.fromValue(object.sceneIds[i])).unsigned = false;
                else if (typeof object.sceneIds[i] === "string")
                    message.sceneIds[i] = parseInt(object.sceneIds[i], 10);
                else if (typeof object.sceneIds[i] === "number")
                    message.sceneIds[i] = object.sceneIds[i];
                else if (typeof object.sceneIds[i] === "object")
                    message.sceneIds[i] = new $util.LongBits(object.sceneIds[i].low >>> 0, object.sceneIds[i].high >>> 0).toNumber();
        }
        if (object.mapObject) {
            if (!Array.isArray(object.mapObject))
                throw TypeError(".RespEnterScenePacket.mapObject: array expected");
            message.mapObject = [];
            for (var i = 0; i < object.mapObject.length; ++i) {
                if (typeof object.mapObject[i] !== "object")
                    throw TypeError(".RespEnterScenePacket.mapObject: object expected");
                message.mapObject[i] = $root.ObjectInMapInfo.fromObject(object.mapObject[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RespEnterScenePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespEnterScenePacket
     * @static
     * @param {RespEnterScenePacket} message RespEnterScenePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespEnterScenePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.sceneIds = [];
            object.mapObject = [];
        }
        if (options.defaults)
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.sceneId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.sceneId = options.longs === String ? "0" : 0;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (typeof message.sceneId === "number")
                object.sceneId = options.longs === String ? String(message.sceneId) : message.sceneId;
            else
                object.sceneId = options.longs === String ? $util.Long.prototype.toString.call(message.sceneId) : options.longs === Number ? new $util.LongBits(message.sceneId.low >>> 0, message.sceneId.high >>> 0).toNumber() : message.sceneId;
        if (message.sceneIds && message.sceneIds.length) {
            object.sceneIds = [];
            for (var j = 0; j < message.sceneIds.length; ++j)
                if (typeof message.sceneIds[j] === "number")
                    object.sceneIds[j] = options.longs === String ? String(message.sceneIds[j]) : message.sceneIds[j];
                else
                    object.sceneIds[j] = options.longs === String ? $util.Long.prototype.toString.call(message.sceneIds[j]) : options.longs === Number ? new $util.LongBits(message.sceneIds[j].low >>> 0, message.sceneIds[j].high >>> 0).toNumber() : message.sceneIds[j];
        }
        if (message.mapObject && message.mapObject.length) {
            object.mapObject = [];
            for (var j = 0; j < message.mapObject.length; ++j)
                object.mapObject[j] = $root.ObjectInMapInfo.toObject(message.mapObject[j], options);
        }
        return object;
    };

    /**
     * Converts this RespEnterScenePacket to JSON.
     * @function toJSON
     * @memberof RespEnterScenePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespEnterScenePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespEnterScenePacket;
})();

$root.ObjectInMapInfo = (function() {

    /**
     * Properties of an ObjectInMapInfo.
     * @exports IObjectInMapInfo
     * @interface IObjectInMapInfo
     * @property {number|Long|null} [objectId] ObjectInMapInfo objectId
     * @property {string|null} [objectName] ObjectInMapInfo objectName
     * @property {number|null} [hp] ObjectInMapInfo hp
     * @property {number|null} [level] ObjectInMapInfo level
     * @property {number|null} [status] ObjectInMapInfo status
     * @property {string|null} [objectType] ObjectInMapInfo objectType
     */

    /**
     * Constructs a new ObjectInMapInfo.
     * @exports ObjectInMapInfo
     * @classdesc Represents an ObjectInMapInfo.
     * @implements IObjectInMapInfo
     * @constructor
     * @param {IObjectInMapInfo=} [properties] Properties to set
     */
    function ObjectInMapInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ObjectInMapInfo objectId.
     * @member {number|Long} objectId
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.objectId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ObjectInMapInfo objectName.
     * @member {string} objectName
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.objectName = "";

    /**
     * ObjectInMapInfo hp.
     * @member {number} hp
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.hp = 0;

    /**
     * ObjectInMapInfo level.
     * @member {number} level
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.level = 0;

    /**
     * ObjectInMapInfo status.
     * @member {number} status
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.status = 0;

    /**
     * ObjectInMapInfo objectType.
     * @member {string} objectType
     * @memberof ObjectInMapInfo
     * @instance
     */
    ObjectInMapInfo.prototype.objectType = "";

    /**
     * Creates a new ObjectInMapInfo instance using the specified properties.
     * @function create
     * @memberof ObjectInMapInfo
     * @static
     * @param {IObjectInMapInfo=} [properties] Properties to set
     * @returns {ObjectInMapInfo} ObjectInMapInfo instance
     */
    ObjectInMapInfo.create = function create(properties) {
        return new ObjectInMapInfo(properties);
    };

    /**
     * Encodes the specified ObjectInMapInfo message. Does not implicitly {@link ObjectInMapInfo.verify|verify} messages.
     * @function encode
     * @memberof ObjectInMapInfo
     * @static
     * @param {IObjectInMapInfo} message ObjectInMapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectInMapInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.objectId != null && message.hasOwnProperty("objectId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.objectId);
        if (message.objectName != null && message.hasOwnProperty("objectName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.objectName);
        if (message.hp != null && message.hasOwnProperty("hp"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hp);
        if (message.level != null && message.hasOwnProperty("level"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.level);
        if (message.status != null && message.hasOwnProperty("status"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.status);
        if (message.objectType != null && message.hasOwnProperty("objectType"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.objectType);
        return writer;
    };

    /**
     * Encodes the specified ObjectInMapInfo message, length delimited. Does not implicitly {@link ObjectInMapInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ObjectInMapInfo
     * @static
     * @param {IObjectInMapInfo} message ObjectInMapInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ObjectInMapInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an ObjectInMapInfo message from the specified reader or buffer.
     * @function decode
     * @memberof ObjectInMapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ObjectInMapInfo} ObjectInMapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectInMapInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ObjectInMapInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.objectId = reader.int64();
                break;
            case 2:
                message.objectName = reader.string();
                break;
            case 3:
                message.hp = reader.int32();
                break;
            case 4:
                message.level = reader.int32();
                break;
            case 5:
                message.status = reader.int32();
                break;
            case 6:
                message.objectType = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes an ObjectInMapInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ObjectInMapInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ObjectInMapInfo} ObjectInMapInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ObjectInMapInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an ObjectInMapInfo message.
     * @function verify
     * @memberof ObjectInMapInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ObjectInMapInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.objectId != null && message.hasOwnProperty("objectId"))
            if (!$util.isInteger(message.objectId) && !(message.objectId && $util.isInteger(message.objectId.low) && $util.isInteger(message.objectId.high)))
                return "objectId: integer|Long expected";
        if (message.objectName != null && message.hasOwnProperty("objectName"))
            if (!$util.isString(message.objectName))
                return "objectName: string expected";
        if (message.hp != null && message.hasOwnProperty("hp"))
            if (!$util.isInteger(message.hp))
                return "hp: integer expected";
        if (message.level != null && message.hasOwnProperty("level"))
            if (!$util.isInteger(message.level))
                return "level: integer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.objectType != null && message.hasOwnProperty("objectType"))
            if (!$util.isString(message.objectType))
                return "objectType: string expected";
        return null;
    };

    /**
     * Creates an ObjectInMapInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ObjectInMapInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ObjectInMapInfo} ObjectInMapInfo
     */
    ObjectInMapInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.ObjectInMapInfo)
            return object;
        var message = new $root.ObjectInMapInfo();
        if (object.objectId != null)
            if ($util.Long)
                (message.objectId = $util.Long.fromValue(object.objectId)).unsigned = false;
            else if (typeof object.objectId === "string")
                message.objectId = parseInt(object.objectId, 10);
            else if (typeof object.objectId === "number")
                message.objectId = object.objectId;
            else if (typeof object.objectId === "object")
                message.objectId = new $util.LongBits(object.objectId.low >>> 0, object.objectId.high >>> 0).toNumber();
        if (object.objectName != null)
            message.objectName = String(object.objectName);
        if (object.hp != null)
            message.hp = object.hp | 0;
        if (object.level != null)
            message.level = object.level | 0;
        if (object.status != null)
            message.status = object.status | 0;
        if (object.objectType != null)
            message.objectType = String(object.objectType);
        return message;
    };

    /**
     * Creates a plain object from an ObjectInMapInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ObjectInMapInfo
     * @static
     * @param {ObjectInMapInfo} message ObjectInMapInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ObjectInMapInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.objectId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.objectId = options.longs === String ? "0" : 0;
            object.objectName = "";
            object.hp = 0;
            object.level = 0;
            object.status = 0;
            object.objectType = "";
        }
        if (message.objectId != null && message.hasOwnProperty("objectId"))
            if (typeof message.objectId === "number")
                object.objectId = options.longs === String ? String(message.objectId) : message.objectId;
            else
                object.objectId = options.longs === String ? $util.Long.prototype.toString.call(message.objectId) : options.longs === Number ? new $util.LongBits(message.objectId.low >>> 0, message.objectId.high >>> 0).toNumber() : message.objectId;
        if (message.objectName != null && message.hasOwnProperty("objectName"))
            object.objectName = message.objectName;
        if (message.hp != null && message.hasOwnProperty("hp"))
            object.hp = message.hp;
        if (message.level != null && message.hasOwnProperty("level"))
            object.level = message.level;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.objectType != null && message.hasOwnProperty("objectType"))
            object.objectType = message.objectType;
        return object;
    };

    /**
     * Converts this ObjectInMapInfo to JSON.
     * @function toJSON
     * @memberof ObjectInMapInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ObjectInMapInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ObjectInMapInfo;
})();

$root.RespBroadcastScenePacket = (function() {

    /**
     * Properties of a RespBroadcastScenePacket.
     * @exports IRespBroadcastScenePacket
     * @interface IRespBroadcastScenePacket
     * @property {number|Long|null} [mapId] RespBroadcastScenePacket mapId
     * @property {number|Long|null} [playerId] RespBroadcastScenePacket playerId
     * @property {string|null} [result] RespBroadcastScenePacket result
     */

    /**
     * Constructs a new RespBroadcastScenePacket.
     * @exports RespBroadcastScenePacket
     * @classdesc Represents a RespBroadcastScenePacket.
     * @implements IRespBroadcastScenePacket
     * @constructor
     * @param {IRespBroadcastScenePacket=} [properties] Properties to set
     */
    function RespBroadcastScenePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespBroadcastScenePacket mapId.
     * @member {number|Long} mapId
     * @memberof RespBroadcastScenePacket
     * @instance
     */
    RespBroadcastScenePacket.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespBroadcastScenePacket playerId.
     * @member {number|Long} playerId
     * @memberof RespBroadcastScenePacket
     * @instance
     */
    RespBroadcastScenePacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespBroadcastScenePacket result.
     * @member {string} result
     * @memberof RespBroadcastScenePacket
     * @instance
     */
    RespBroadcastScenePacket.prototype.result = "";

    /**
     * Creates a new RespBroadcastScenePacket instance using the specified properties.
     * @function create
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {IRespBroadcastScenePacket=} [properties] Properties to set
     * @returns {RespBroadcastScenePacket} RespBroadcastScenePacket instance
     */
    RespBroadcastScenePacket.create = function create(properties) {
        return new RespBroadcastScenePacket(properties);
    };

    /**
     * Encodes the specified RespBroadcastScenePacket message. Does not implicitly {@link RespBroadcastScenePacket.verify|verify} messages.
     * @function encode
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {IRespBroadcastScenePacket} message RespBroadcastScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespBroadcastScenePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.mapId);
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.playerId);
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespBroadcastScenePacket message, length delimited. Does not implicitly {@link RespBroadcastScenePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {IRespBroadcastScenePacket} message RespBroadcastScenePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespBroadcastScenePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespBroadcastScenePacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespBroadcastScenePacket} RespBroadcastScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespBroadcastScenePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespBroadcastScenePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mapId = reader.int64();
                break;
            case 2:
                message.playerId = reader.int64();
                break;
            case 3:
                message.result = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespBroadcastScenePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespBroadcastScenePacket} RespBroadcastScenePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespBroadcastScenePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespBroadcastScenePacket message.
     * @function verify
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespBroadcastScenePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        return null;
    };

    /**
     * Creates a RespBroadcastScenePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespBroadcastScenePacket} RespBroadcastScenePacket
     */
    RespBroadcastScenePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespBroadcastScenePacket)
            return object;
        var message = new $root.RespBroadcastScenePacket();
        if (object.mapId != null)
            if ($util.Long)
                (message.mapId = $util.Long.fromValue(object.mapId)).unsigned = false;
            else if (typeof object.mapId === "string")
                message.mapId = parseInt(object.mapId, 10);
            else if (typeof object.mapId === "number")
                message.mapId = object.mapId;
            else if (typeof object.mapId === "object")
                message.mapId = new $util.LongBits(object.mapId.low >>> 0, object.mapId.high >>> 0).toNumber();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.result != null)
            message.result = String(object.result);
        return message;
    };

    /**
     * Creates a plain object from a RespBroadcastScenePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespBroadcastScenePacket
     * @static
     * @param {RespBroadcastScenePacket} message RespBroadcastScenePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespBroadcastScenePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.mapId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.mapId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.result = "";
        }
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (typeof message.mapId === "number")
                object.mapId = options.longs === String ? String(message.mapId) : message.mapId;
            else
                object.mapId = options.longs === String ? $util.Long.prototype.toString.call(message.mapId) : options.longs === Number ? new $util.LongBits(message.mapId.low >>> 0, message.mapId.high >>> 0).toNumber() : message.mapId;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this RespBroadcastScenePacket to JSON.
     * @function toJSON
     * @memberof RespBroadcastScenePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespBroadcastScenePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespBroadcastScenePacket;
})();

$root.ReqChangeMapInstancePacket = (function() {

    /**
     * Properties of a ReqChangeMapInstancePacket.
     * @exports IReqChangeMapInstancePacket
     * @interface IReqChangeMapInstancePacket
     * @property {number|Long|null} [oldMapId] ReqChangeMapInstancePacket oldMapId
     * @property {number|Long|null} [newMapId] ReqChangeMapInstancePacket newMapId
     */

    /**
     * Constructs a new ReqChangeMapInstancePacket.
     * @exports ReqChangeMapInstancePacket
     * @classdesc Represents a ReqChangeMapInstancePacket.
     * @implements IReqChangeMapInstancePacket
     * @constructor
     * @param {IReqChangeMapInstancePacket=} [properties] Properties to set
     */
    function ReqChangeMapInstancePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqChangeMapInstancePacket oldMapId.
     * @member {number|Long} oldMapId
     * @memberof ReqChangeMapInstancePacket
     * @instance
     */
    ReqChangeMapInstancePacket.prototype.oldMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqChangeMapInstancePacket newMapId.
     * @member {number|Long} newMapId
     * @memberof ReqChangeMapInstancePacket
     * @instance
     */
    ReqChangeMapInstancePacket.prototype.newMapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReqChangeMapInstancePacket instance using the specified properties.
     * @function create
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {IReqChangeMapInstancePacket=} [properties] Properties to set
     * @returns {ReqChangeMapInstancePacket} ReqChangeMapInstancePacket instance
     */
    ReqChangeMapInstancePacket.create = function create(properties) {
        return new ReqChangeMapInstancePacket(properties);
    };

    /**
     * Encodes the specified ReqChangeMapInstancePacket message. Does not implicitly {@link ReqChangeMapInstancePacket.verify|verify} messages.
     * @function encode
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {IReqChangeMapInstancePacket} message ReqChangeMapInstancePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqChangeMapInstancePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.oldMapId != null && message.hasOwnProperty("oldMapId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.oldMapId);
        if (message.newMapId != null && message.hasOwnProperty("newMapId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.newMapId);
        return writer;
    };

    /**
     * Encodes the specified ReqChangeMapInstancePacket message, length delimited. Does not implicitly {@link ReqChangeMapInstancePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {IReqChangeMapInstancePacket} message ReqChangeMapInstancePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqChangeMapInstancePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqChangeMapInstancePacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqChangeMapInstancePacket} ReqChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqChangeMapInstancePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqChangeMapInstancePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.oldMapId = reader.int64();
                break;
            case 2:
                message.newMapId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqChangeMapInstancePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqChangeMapInstancePacket} ReqChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqChangeMapInstancePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqChangeMapInstancePacket message.
     * @function verify
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqChangeMapInstancePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.oldMapId != null && message.hasOwnProperty("oldMapId"))
            if (!$util.isInteger(message.oldMapId) && !(message.oldMapId && $util.isInteger(message.oldMapId.low) && $util.isInteger(message.oldMapId.high)))
                return "oldMapId: integer|Long expected";
        if (message.newMapId != null && message.hasOwnProperty("newMapId"))
            if (!$util.isInteger(message.newMapId) && !(message.newMapId && $util.isInteger(message.newMapId.low) && $util.isInteger(message.newMapId.high)))
                return "newMapId: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReqChangeMapInstancePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqChangeMapInstancePacket} ReqChangeMapInstancePacket
     */
    ReqChangeMapInstancePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqChangeMapInstancePacket)
            return object;
        var message = new $root.ReqChangeMapInstancePacket();
        if (object.oldMapId != null)
            if ($util.Long)
                (message.oldMapId = $util.Long.fromValue(object.oldMapId)).unsigned = false;
            else if (typeof object.oldMapId === "string")
                message.oldMapId = parseInt(object.oldMapId, 10);
            else if (typeof object.oldMapId === "number")
                message.oldMapId = object.oldMapId;
            else if (typeof object.oldMapId === "object")
                message.oldMapId = new $util.LongBits(object.oldMapId.low >>> 0, object.oldMapId.high >>> 0).toNumber();
        if (object.newMapId != null)
            if ($util.Long)
                (message.newMapId = $util.Long.fromValue(object.newMapId)).unsigned = false;
            else if (typeof object.newMapId === "string")
                message.newMapId = parseInt(object.newMapId, 10);
            else if (typeof object.newMapId === "number")
                message.newMapId = object.newMapId;
            else if (typeof object.newMapId === "object")
                message.newMapId = new $util.LongBits(object.newMapId.low >>> 0, object.newMapId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReqChangeMapInstancePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqChangeMapInstancePacket
     * @static
     * @param {ReqChangeMapInstancePacket} message ReqChangeMapInstancePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqChangeMapInstancePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.oldMapId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.oldMapId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.newMapId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.newMapId = options.longs === String ? "0" : 0;
        }
        if (message.oldMapId != null && message.hasOwnProperty("oldMapId"))
            if (typeof message.oldMapId === "number")
                object.oldMapId = options.longs === String ? String(message.oldMapId) : message.oldMapId;
            else
                object.oldMapId = options.longs === String ? $util.Long.prototype.toString.call(message.oldMapId) : options.longs === Number ? new $util.LongBits(message.oldMapId.low >>> 0, message.oldMapId.high >>> 0).toNumber() : message.oldMapId;
        if (message.newMapId != null && message.hasOwnProperty("newMapId"))
            if (typeof message.newMapId === "number")
                object.newMapId = options.longs === String ? String(message.newMapId) : message.newMapId;
            else
                object.newMapId = options.longs === String ? $util.Long.prototype.toString.call(message.newMapId) : options.longs === Number ? new $util.LongBits(message.newMapId.low >>> 0, message.newMapId.high >>> 0).toNumber() : message.newMapId;
        return object;
    };

    /**
     * Converts this ReqChangeMapInstancePacket to JSON.
     * @function toJSON
     * @memberof ReqChangeMapInstancePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqChangeMapInstancePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqChangeMapInstancePacket;
})();

$root.RespChangeMapInstancePacket = (function() {

    /**
     * Properties of a RespChangeMapInstancePacket.
     * @exports IRespChangeMapInstancePacket
     * @interface IRespChangeMapInstancePacket
     * @property {string|null} [result] RespChangeMapInstancePacket result
     */

    /**
     * Constructs a new RespChangeMapInstancePacket.
     * @exports RespChangeMapInstancePacket
     * @classdesc Represents a RespChangeMapInstancePacket.
     * @implements IRespChangeMapInstancePacket
     * @constructor
     * @param {IRespChangeMapInstancePacket=} [properties] Properties to set
     */
    function RespChangeMapInstancePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespChangeMapInstancePacket result.
     * @member {string} result
     * @memberof RespChangeMapInstancePacket
     * @instance
     */
    RespChangeMapInstancePacket.prototype.result = "";

    /**
     * Creates a new RespChangeMapInstancePacket instance using the specified properties.
     * @function create
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {IRespChangeMapInstancePacket=} [properties] Properties to set
     * @returns {RespChangeMapInstancePacket} RespChangeMapInstancePacket instance
     */
    RespChangeMapInstancePacket.create = function create(properties) {
        return new RespChangeMapInstancePacket(properties);
    };

    /**
     * Encodes the specified RespChangeMapInstancePacket message. Does not implicitly {@link RespChangeMapInstancePacket.verify|verify} messages.
     * @function encode
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {IRespChangeMapInstancePacket} message RespChangeMapInstancePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespChangeMapInstancePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespChangeMapInstancePacket message, length delimited. Does not implicitly {@link RespChangeMapInstancePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {IRespChangeMapInstancePacket} message RespChangeMapInstancePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespChangeMapInstancePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespChangeMapInstancePacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespChangeMapInstancePacket} RespChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespChangeMapInstancePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespChangeMapInstancePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespChangeMapInstancePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespChangeMapInstancePacket} RespChangeMapInstancePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespChangeMapInstancePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespChangeMapInstancePacket message.
     * @function verify
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespChangeMapInstancePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        return null;
    };

    /**
     * Creates a RespChangeMapInstancePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespChangeMapInstancePacket} RespChangeMapInstancePacket
     */
    RespChangeMapInstancePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespChangeMapInstancePacket)
            return object;
        var message = new $root.RespChangeMapInstancePacket();
        if (object.result != null)
            message.result = String(object.result);
        return message;
    };

    /**
     * Creates a plain object from a RespChangeMapInstancePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespChangeMapInstancePacket
     * @static
     * @param {RespChangeMapInstancePacket} message RespChangeMapInstancePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespChangeMapInstancePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.result = "";
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this RespChangeMapInstancePacket to JSON.
     * @function toJSON
     * @memberof RespChangeMapInstancePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespChangeMapInstancePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespChangeMapInstancePacket;
})();

$root.ReqChatWithOtherPacket = (function() {

    /**
     * Properties of a ReqChatWithOtherPacket.
     * @exports IReqChatWithOtherPacket
     * @interface IReqChatWithOtherPacket
     * @property {string|null} [content] ReqChatWithOtherPacket content
     */

    /**
     * Constructs a new ReqChatWithOtherPacket.
     * @exports ReqChatWithOtherPacket
     * @classdesc Represents a ReqChatWithOtherPacket.
     * @implements IReqChatWithOtherPacket
     * @constructor
     * @param {IReqChatWithOtherPacket=} [properties] Properties to set
     */
    function ReqChatWithOtherPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqChatWithOtherPacket content.
     * @member {string} content
     * @memberof ReqChatWithOtherPacket
     * @instance
     */
    ReqChatWithOtherPacket.prototype.content = "";

    /**
     * Creates a new ReqChatWithOtherPacket instance using the specified properties.
     * @function create
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {IReqChatWithOtherPacket=} [properties] Properties to set
     * @returns {ReqChatWithOtherPacket} ReqChatWithOtherPacket instance
     */
    ReqChatWithOtherPacket.create = function create(properties) {
        return new ReqChatWithOtherPacket(properties);
    };

    /**
     * Encodes the specified ReqChatWithOtherPacket message. Does not implicitly {@link ReqChatWithOtherPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {IReqChatWithOtherPacket} message ReqChatWithOtherPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqChatWithOtherPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified ReqChatWithOtherPacket message, length delimited. Does not implicitly {@link ReqChatWithOtherPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {IReqChatWithOtherPacket} message ReqChatWithOtherPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqChatWithOtherPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqChatWithOtherPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqChatWithOtherPacket} ReqChatWithOtherPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqChatWithOtherPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqChatWithOtherPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.content = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqChatWithOtherPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqChatWithOtherPacket} ReqChatWithOtherPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqChatWithOtherPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqChatWithOtherPacket message.
     * @function verify
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqChatWithOtherPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a ReqChatWithOtherPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqChatWithOtherPacket} ReqChatWithOtherPacket
     */
    ReqChatWithOtherPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqChatWithOtherPacket)
            return object;
        var message = new $root.ReqChatWithOtherPacket();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a ReqChatWithOtherPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqChatWithOtherPacket
     * @static
     * @param {ReqChatWithOtherPacket} message ReqChatWithOtherPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqChatWithOtherPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.content = "";
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this ReqChatWithOtherPacket to JSON.
     * @function toJSON
     * @memberof ReqChatWithOtherPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqChatWithOtherPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqChatWithOtherPacket;
})();

$root.RespChatWithOtherPacket = (function() {

    /**
     * Properties of a RespChatWithOtherPacket.
     * @exports IRespChatWithOtherPacket
     * @interface IRespChatWithOtherPacket
     * @property {number|Long|null} [playerId] RespChatWithOtherPacket playerId
     * @property {number|null} [channelId] RespChatWithOtherPacket channelId
     * @property {number|Long|null} [creatureId] RespChatWithOtherPacket creatureId
     * @property {string|null} [content] RespChatWithOtherPacket content
     */

    /**
     * Constructs a new RespChatWithOtherPacket.
     * @exports RespChatWithOtherPacket
     * @classdesc Represents a RespChatWithOtherPacket.
     * @implements IRespChatWithOtherPacket
     * @constructor
     * @param {IRespChatWithOtherPacket=} [properties] Properties to set
     */
    function RespChatWithOtherPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespChatWithOtherPacket playerId.
     * @member {number|Long} playerId
     * @memberof RespChatWithOtherPacket
     * @instance
     */
    RespChatWithOtherPacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespChatWithOtherPacket channelId.
     * @member {number} channelId
     * @memberof RespChatWithOtherPacket
     * @instance
     */
    RespChatWithOtherPacket.prototype.channelId = 0;

    /**
     * RespChatWithOtherPacket creatureId.
     * @member {number|Long} creatureId
     * @memberof RespChatWithOtherPacket
     * @instance
     */
    RespChatWithOtherPacket.prototype.creatureId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespChatWithOtherPacket content.
     * @member {string} content
     * @memberof RespChatWithOtherPacket
     * @instance
     */
    RespChatWithOtherPacket.prototype.content = "";

    /**
     * Creates a new RespChatWithOtherPacket instance using the specified properties.
     * @function create
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {IRespChatWithOtherPacket=} [properties] Properties to set
     * @returns {RespChatWithOtherPacket} RespChatWithOtherPacket instance
     */
    RespChatWithOtherPacket.create = function create(properties) {
        return new RespChatWithOtherPacket(properties);
    };

    /**
     * Encodes the specified RespChatWithOtherPacket message. Does not implicitly {@link RespChatWithOtherPacket.verify|verify} messages.
     * @function encode
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {IRespChatWithOtherPacket} message RespChatWithOtherPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespChatWithOtherPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.channelId);
        if (message.creatureId != null && message.hasOwnProperty("creatureId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.creatureId);
        if (message.content != null && message.hasOwnProperty("content"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.content);
        return writer;
    };

    /**
     * Encodes the specified RespChatWithOtherPacket message, length delimited. Does not implicitly {@link RespChatWithOtherPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {IRespChatWithOtherPacket} message RespChatWithOtherPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespChatWithOtherPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespChatWithOtherPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespChatWithOtherPacket} RespChatWithOtherPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespChatWithOtherPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespChatWithOtherPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int64();
                break;
            case 2:
                message.channelId = reader.int32();
                break;
            case 3:
                message.creatureId = reader.int64();
                break;
            case 4:
                message.content = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespChatWithOtherPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespChatWithOtherPacket} RespChatWithOtherPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespChatWithOtherPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespChatWithOtherPacket message.
     * @function verify
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespChatWithOtherPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            if (!$util.isInteger(message.channelId))
                return "channelId: integer expected";
        if (message.creatureId != null && message.hasOwnProperty("creatureId"))
            if (!$util.isInteger(message.creatureId) && !(message.creatureId && $util.isInteger(message.creatureId.low) && $util.isInteger(message.creatureId.high)))
                return "creatureId: integer|Long expected";
        if (message.content != null && message.hasOwnProperty("content"))
            if (!$util.isString(message.content))
                return "content: string expected";
        return null;
    };

    /**
     * Creates a RespChatWithOtherPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespChatWithOtherPacket} RespChatWithOtherPacket
     */
    RespChatWithOtherPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespChatWithOtherPacket)
            return object;
        var message = new $root.RespChatWithOtherPacket();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.channelId != null)
            message.channelId = object.channelId | 0;
        if (object.creatureId != null)
            if ($util.Long)
                (message.creatureId = $util.Long.fromValue(object.creatureId)).unsigned = false;
            else if (typeof object.creatureId === "string")
                message.creatureId = parseInt(object.creatureId, 10);
            else if (typeof object.creatureId === "number")
                message.creatureId = object.creatureId;
            else if (typeof object.creatureId === "object")
                message.creatureId = new $util.LongBits(object.creatureId.low >>> 0, object.creatureId.high >>> 0).toNumber();
        if (object.content != null)
            message.content = String(object.content);
        return message;
    };

    /**
     * Creates a plain object from a RespChatWithOtherPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespChatWithOtherPacket
     * @static
     * @param {RespChatWithOtherPacket} message RespChatWithOtherPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespChatWithOtherPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.channelId = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.creatureId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.creatureId = options.longs === String ? "0" : 0;
            object.content = "";
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.channelId != null && message.hasOwnProperty("channelId"))
            object.channelId = message.channelId;
        if (message.creatureId != null && message.hasOwnProperty("creatureId"))
            if (typeof message.creatureId === "number")
                object.creatureId = options.longs === String ? String(message.creatureId) : message.creatureId;
            else
                object.creatureId = options.longs === String ? $util.Long.prototype.toString.call(message.creatureId) : options.longs === Number ? new $util.LongBits(message.creatureId.low >>> 0, message.creatureId.high >>> 0).toNumber() : message.creatureId;
        if (message.content != null && message.hasOwnProperty("content"))
            object.content = message.content;
        return object;
    };

    /**
     * Converts this RespChatWithOtherPacket to JSON.
     * @function toJSON
     * @memberof RespChatWithOtherPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespChatWithOtherPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespChatWithOtherPacket;
})();

$root.ReqAttackMonsterPacket = (function() {

    /**
     * Properties of a ReqAttackMonsterPacket.
     * @exports IReqAttackMonsterPacket
     * @interface IReqAttackMonsterPacket
     * @property {number|Long|null} [mapId] ReqAttackMonsterPacket mapId
     * @property {number|Long|null} [monsterId] ReqAttackMonsterPacket monsterId
     */

    /**
     * Constructs a new ReqAttackMonsterPacket.
     * @exports ReqAttackMonsterPacket
     * @classdesc Represents a ReqAttackMonsterPacket.
     * @implements IReqAttackMonsterPacket
     * @constructor
     * @param {IReqAttackMonsterPacket=} [properties] Properties to set
     */
    function ReqAttackMonsterPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqAttackMonsterPacket mapId.
     * @member {number|Long} mapId
     * @memberof ReqAttackMonsterPacket
     * @instance
     */
    ReqAttackMonsterPacket.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqAttackMonsterPacket monsterId.
     * @member {number|Long} monsterId
     * @memberof ReqAttackMonsterPacket
     * @instance
     */
    ReqAttackMonsterPacket.prototype.monsterId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new ReqAttackMonsterPacket instance using the specified properties.
     * @function create
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {IReqAttackMonsterPacket=} [properties] Properties to set
     * @returns {ReqAttackMonsterPacket} ReqAttackMonsterPacket instance
     */
    ReqAttackMonsterPacket.create = function create(properties) {
        return new ReqAttackMonsterPacket(properties);
    };

    /**
     * Encodes the specified ReqAttackMonsterPacket message. Does not implicitly {@link ReqAttackMonsterPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {IReqAttackMonsterPacket} message ReqAttackMonsterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqAttackMonsterPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.mapId);
        if (message.monsterId != null && message.hasOwnProperty("monsterId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.monsterId);
        return writer;
    };

    /**
     * Encodes the specified ReqAttackMonsterPacket message, length delimited. Does not implicitly {@link ReqAttackMonsterPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {IReqAttackMonsterPacket} message ReqAttackMonsterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqAttackMonsterPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqAttackMonsterPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqAttackMonsterPacket} ReqAttackMonsterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqAttackMonsterPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqAttackMonsterPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mapId = reader.int64();
                break;
            case 2:
                message.monsterId = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqAttackMonsterPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqAttackMonsterPacket} ReqAttackMonsterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqAttackMonsterPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqAttackMonsterPacket message.
     * @function verify
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqAttackMonsterPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
        if (message.monsterId != null && message.hasOwnProperty("monsterId"))
            if (!$util.isInteger(message.monsterId) && !(message.monsterId && $util.isInteger(message.monsterId.low) && $util.isInteger(message.monsterId.high)))
                return "monsterId: integer|Long expected";
        return null;
    };

    /**
     * Creates a ReqAttackMonsterPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqAttackMonsterPacket} ReqAttackMonsterPacket
     */
    ReqAttackMonsterPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqAttackMonsterPacket)
            return object;
        var message = new $root.ReqAttackMonsterPacket();
        if (object.mapId != null)
            if ($util.Long)
                (message.mapId = $util.Long.fromValue(object.mapId)).unsigned = false;
            else if (typeof object.mapId === "string")
                message.mapId = parseInt(object.mapId, 10);
            else if (typeof object.mapId === "number")
                message.mapId = object.mapId;
            else if (typeof object.mapId === "object")
                message.mapId = new $util.LongBits(object.mapId.low >>> 0, object.mapId.high >>> 0).toNumber();
        if (object.monsterId != null)
            if ($util.Long)
                (message.monsterId = $util.Long.fromValue(object.monsterId)).unsigned = false;
            else if (typeof object.monsterId === "string")
                message.monsterId = parseInt(object.monsterId, 10);
            else if (typeof object.monsterId === "number")
                message.monsterId = object.monsterId;
            else if (typeof object.monsterId === "object")
                message.monsterId = new $util.LongBits(object.monsterId.low >>> 0, object.monsterId.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a ReqAttackMonsterPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqAttackMonsterPacket
     * @static
     * @param {ReqAttackMonsterPacket} message ReqAttackMonsterPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqAttackMonsterPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.mapId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.mapId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.monsterId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.monsterId = options.longs === String ? "0" : 0;
        }
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (typeof message.mapId === "number")
                object.mapId = options.longs === String ? String(message.mapId) : message.mapId;
            else
                object.mapId = options.longs === String ? $util.Long.prototype.toString.call(message.mapId) : options.longs === Number ? new $util.LongBits(message.mapId.low >>> 0, message.mapId.high >>> 0).toNumber() : message.mapId;
        if (message.monsterId != null && message.hasOwnProperty("monsterId"))
            if (typeof message.monsterId === "number")
                object.monsterId = options.longs === String ? String(message.monsterId) : message.monsterId;
            else
                object.monsterId = options.longs === String ? $util.Long.prototype.toString.call(message.monsterId) : options.longs === Number ? new $util.LongBits(message.monsterId.low >>> 0, message.monsterId.high >>> 0).toNumber() : message.monsterId;
        return object;
    };

    /**
     * Converts this ReqAttackMonsterPacket to JSON.
     * @function toJSON
     * @memberof ReqAttackMonsterPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqAttackMonsterPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqAttackMonsterPacket;
})();

$root.RespAttackMonsterPacket = (function() {

    /**
     * Properties of a RespAttackMonsterPacket.
     * @exports IRespAttackMonsterPacket
     * @interface IRespAttackMonsterPacket
     * @property {number|null} [monsterHp] RespAttackMonsterPacket monsterHp
     */

    /**
     * Constructs a new RespAttackMonsterPacket.
     * @exports RespAttackMonsterPacket
     * @classdesc Represents a RespAttackMonsterPacket.
     * @implements IRespAttackMonsterPacket
     * @constructor
     * @param {IRespAttackMonsterPacket=} [properties] Properties to set
     */
    function RespAttackMonsterPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespAttackMonsterPacket monsterHp.
     * @member {number} monsterHp
     * @memberof RespAttackMonsterPacket
     * @instance
     */
    RespAttackMonsterPacket.prototype.monsterHp = 0;

    /**
     * Creates a new RespAttackMonsterPacket instance using the specified properties.
     * @function create
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {IRespAttackMonsterPacket=} [properties] Properties to set
     * @returns {RespAttackMonsterPacket} RespAttackMonsterPacket instance
     */
    RespAttackMonsterPacket.create = function create(properties) {
        return new RespAttackMonsterPacket(properties);
    };

    /**
     * Encodes the specified RespAttackMonsterPacket message. Does not implicitly {@link RespAttackMonsterPacket.verify|verify} messages.
     * @function encode
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {IRespAttackMonsterPacket} message RespAttackMonsterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespAttackMonsterPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.monsterHp != null && message.hasOwnProperty("monsterHp"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.monsterHp);
        return writer;
    };

    /**
     * Encodes the specified RespAttackMonsterPacket message, length delimited. Does not implicitly {@link RespAttackMonsterPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {IRespAttackMonsterPacket} message RespAttackMonsterPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespAttackMonsterPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespAttackMonsterPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespAttackMonsterPacket} RespAttackMonsterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespAttackMonsterPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespAttackMonsterPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.monsterHp = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespAttackMonsterPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespAttackMonsterPacket} RespAttackMonsterPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespAttackMonsterPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespAttackMonsterPacket message.
     * @function verify
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespAttackMonsterPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.monsterHp != null && message.hasOwnProperty("monsterHp"))
            if (!$util.isInteger(message.monsterHp))
                return "monsterHp: integer expected";
        return null;
    };

    /**
     * Creates a RespAttackMonsterPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespAttackMonsterPacket} RespAttackMonsterPacket
     */
    RespAttackMonsterPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespAttackMonsterPacket)
            return object;
        var message = new $root.RespAttackMonsterPacket();
        if (object.monsterHp != null)
            message.monsterHp = object.monsterHp | 0;
        return message;
    };

    /**
     * Creates a plain object from a RespAttackMonsterPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespAttackMonsterPacket
     * @static
     * @param {RespAttackMonsterPacket} message RespAttackMonsterPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespAttackMonsterPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.monsterHp = 0;
        if (message.monsterHp != null && message.hasOwnProperty("monsterHp"))
            object.monsterHp = message.monsterHp;
        return object;
    };

    /**
     * Converts this RespAttackMonsterPacket to JSON.
     * @function toJSON
     * @memberof RespAttackMonsterPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespAttackMonsterPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespAttackMonsterPacket;
})();

$root.ReqUseSkillPacket = (function() {

    /**
     * Properties of a ReqUseSkillPacket.
     * @exports IReqUseSkillPacket
     * @interface IReqUseSkillPacket
     * @property {number|Long|null} [mapId] ReqUseSkillPacket mapId
     * @property {number|Long|null} [targetId] ReqUseSkillPacket targetId
     * @property {number|null} [skillId] ReqUseSkillPacket skillId
     */

    /**
     * Constructs a new ReqUseSkillPacket.
     * @exports ReqUseSkillPacket
     * @classdesc Represents a ReqUseSkillPacket.
     * @implements IReqUseSkillPacket
     * @constructor
     * @param {IReqUseSkillPacket=} [properties] Properties to set
     */
    function ReqUseSkillPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReqUseSkillPacket mapId.
     * @member {number|Long} mapId
     * @memberof ReqUseSkillPacket
     * @instance
     */
    ReqUseSkillPacket.prototype.mapId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqUseSkillPacket targetId.
     * @member {number|Long} targetId
     * @memberof ReqUseSkillPacket
     * @instance
     */
    ReqUseSkillPacket.prototype.targetId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * ReqUseSkillPacket skillId.
     * @member {number} skillId
     * @memberof ReqUseSkillPacket
     * @instance
     */
    ReqUseSkillPacket.prototype.skillId = 0;

    /**
     * Creates a new ReqUseSkillPacket instance using the specified properties.
     * @function create
     * @memberof ReqUseSkillPacket
     * @static
     * @param {IReqUseSkillPacket=} [properties] Properties to set
     * @returns {ReqUseSkillPacket} ReqUseSkillPacket instance
     */
    ReqUseSkillPacket.create = function create(properties) {
        return new ReqUseSkillPacket(properties);
    };

    /**
     * Encodes the specified ReqUseSkillPacket message. Does not implicitly {@link ReqUseSkillPacket.verify|verify} messages.
     * @function encode
     * @memberof ReqUseSkillPacket
     * @static
     * @param {IReqUseSkillPacket} message ReqUseSkillPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUseSkillPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.mapId);
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.targetId);
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.skillId);
        return writer;
    };

    /**
     * Encodes the specified ReqUseSkillPacket message, length delimited. Does not implicitly {@link ReqUseSkillPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReqUseSkillPacket
     * @static
     * @param {IReqUseSkillPacket} message ReqUseSkillPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReqUseSkillPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReqUseSkillPacket message from the specified reader or buffer.
     * @function decode
     * @memberof ReqUseSkillPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReqUseSkillPacket} ReqUseSkillPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUseSkillPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReqUseSkillPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.mapId = reader.int64();
                break;
            case 2:
                message.targetId = reader.int64();
                break;
            case 3:
                message.skillId = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReqUseSkillPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReqUseSkillPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReqUseSkillPacket} ReqUseSkillPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReqUseSkillPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReqUseSkillPacket message.
     * @function verify
     * @memberof ReqUseSkillPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReqUseSkillPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (!$util.isInteger(message.mapId) && !(message.mapId && $util.isInteger(message.mapId.low) && $util.isInteger(message.mapId.high)))
                return "mapId: integer|Long expected";
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            if (!$util.isInteger(message.targetId) && !(message.targetId && $util.isInteger(message.targetId.low) && $util.isInteger(message.targetId.high)))
                return "targetId: integer|Long expected";
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            if (!$util.isInteger(message.skillId))
                return "skillId: integer expected";
        return null;
    };

    /**
     * Creates a ReqUseSkillPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReqUseSkillPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReqUseSkillPacket} ReqUseSkillPacket
     */
    ReqUseSkillPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.ReqUseSkillPacket)
            return object;
        var message = new $root.ReqUseSkillPacket();
        if (object.mapId != null)
            if ($util.Long)
                (message.mapId = $util.Long.fromValue(object.mapId)).unsigned = false;
            else if (typeof object.mapId === "string")
                message.mapId = parseInt(object.mapId, 10);
            else if (typeof object.mapId === "number")
                message.mapId = object.mapId;
            else if (typeof object.mapId === "object")
                message.mapId = new $util.LongBits(object.mapId.low >>> 0, object.mapId.high >>> 0).toNumber();
        if (object.targetId != null)
            if ($util.Long)
                (message.targetId = $util.Long.fromValue(object.targetId)).unsigned = false;
            else if (typeof object.targetId === "string")
                message.targetId = parseInt(object.targetId, 10);
            else if (typeof object.targetId === "number")
                message.targetId = object.targetId;
            else if (typeof object.targetId === "object")
                message.targetId = new $util.LongBits(object.targetId.low >>> 0, object.targetId.high >>> 0).toNumber();
        if (object.skillId != null)
            message.skillId = object.skillId | 0;
        return message;
    };

    /**
     * Creates a plain object from a ReqUseSkillPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReqUseSkillPacket
     * @static
     * @param {ReqUseSkillPacket} message ReqUseSkillPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReqUseSkillPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.mapId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.mapId = options.longs === String ? "0" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.targetId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.targetId = options.longs === String ? "0" : 0;
            object.skillId = 0;
        }
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (typeof message.mapId === "number")
                object.mapId = options.longs === String ? String(message.mapId) : message.mapId;
            else
                object.mapId = options.longs === String ? $util.Long.prototype.toString.call(message.mapId) : options.longs === Number ? new $util.LongBits(message.mapId.low >>> 0, message.mapId.high >>> 0).toNumber() : message.mapId;
        if (message.targetId != null && message.hasOwnProperty("targetId"))
            if (typeof message.targetId === "number")
                object.targetId = options.longs === String ? String(message.targetId) : message.targetId;
            else
                object.targetId = options.longs === String ? $util.Long.prototype.toString.call(message.targetId) : options.longs === Number ? new $util.LongBits(message.targetId.low >>> 0, message.targetId.high >>> 0).toNumber() : message.targetId;
        if (message.skillId != null && message.hasOwnProperty("skillId"))
            object.skillId = message.skillId;
        return object;
    };

    /**
     * Converts this ReqUseSkillPacket to JSON.
     * @function toJSON
     * @memberof ReqUseSkillPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReqUseSkillPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return ReqUseSkillPacket;
})();

$root.RespUseSkillPacket = (function() {

    /**
     * Properties of a RespUseSkillPacket.
     * @exports IRespUseSkillPacket
     * @interface IRespUseSkillPacket
     * @property {string|null} [result] RespUseSkillPacket result
     */

    /**
     * Constructs a new RespUseSkillPacket.
     * @exports RespUseSkillPacket
     * @classdesc Represents a RespUseSkillPacket.
     * @implements IRespUseSkillPacket
     * @constructor
     * @param {IRespUseSkillPacket=} [properties] Properties to set
     */
    function RespUseSkillPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespUseSkillPacket result.
     * @member {string} result
     * @memberof RespUseSkillPacket
     * @instance
     */
    RespUseSkillPacket.prototype.result = "";

    /**
     * Creates a new RespUseSkillPacket instance using the specified properties.
     * @function create
     * @memberof RespUseSkillPacket
     * @static
     * @param {IRespUseSkillPacket=} [properties] Properties to set
     * @returns {RespUseSkillPacket} RespUseSkillPacket instance
     */
    RespUseSkillPacket.create = function create(properties) {
        return new RespUseSkillPacket(properties);
    };

    /**
     * Encodes the specified RespUseSkillPacket message. Does not implicitly {@link RespUseSkillPacket.verify|verify} messages.
     * @function encode
     * @memberof RespUseSkillPacket
     * @static
     * @param {IRespUseSkillPacket} message RespUseSkillPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespUseSkillPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespUseSkillPacket message, length delimited. Does not implicitly {@link RespUseSkillPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespUseSkillPacket
     * @static
     * @param {IRespUseSkillPacket} message RespUseSkillPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespUseSkillPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespUseSkillPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespUseSkillPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespUseSkillPacket} RespUseSkillPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespUseSkillPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespUseSkillPacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RespUseSkillPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespUseSkillPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespUseSkillPacket} RespUseSkillPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespUseSkillPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespUseSkillPacket message.
     * @function verify
     * @memberof RespUseSkillPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespUseSkillPacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isString(message.result))
                return "result: string expected";
        return null;
    };

    /**
     * Creates a RespUseSkillPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespUseSkillPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespUseSkillPacket} RespUseSkillPacket
     */
    RespUseSkillPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespUseSkillPacket)
            return object;
        var message = new $root.RespUseSkillPacket();
        if (object.result != null)
            message.result = String(object.result);
        return message;
    };

    /**
     * Creates a plain object from a RespUseSkillPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespUseSkillPacket
     * @static
     * @param {RespUseSkillPacket} message RespUseSkillPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespUseSkillPacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.result = "";
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this RespUseSkillPacket to JSON.
     * @function toJSON
     * @memberof RespUseSkillPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespUseSkillPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespUseSkillPacket;
})();

module.exports = $root;
