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
        if (options.defaults)
            object.result = "";
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
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
     * @property {number|null} [playerId] RespCreateRolePacket playerId
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
     * @member {number} playerId
     * @memberof RespCreateRolePacket
     * @instance
     */
    RespCreateRolePacket.prototype.playerId = 0;

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
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.playerId);
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
                message.playerId = reader.int32();
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
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
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
            message.playerId = object.playerId | 0;
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
            object.playerId = 0;
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
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

$root.ReqEnterScenePacket = (function() {

    /**
     * Properties of a ReqEnterScenePacket.
     * @exports IReqEnterScenePacket
     * @interface IReqEnterScenePacket
     * @property {number|null} [playerId] ReqEnterScenePacket playerId
     * @property {number|null} [sceneId] ReqEnterScenePacket sceneId
     * @property {number|null} [mapId] ReqEnterScenePacket mapId
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
     * @member {number} playerId
     * @memberof ReqEnterScenePacket
     * @instance
     */
    ReqEnterScenePacket.prototype.playerId = 0;

    /**
     * ReqEnterScenePacket sceneId.
     * @member {number} sceneId
     * @memberof ReqEnterScenePacket
     * @instance
     */
    ReqEnterScenePacket.prototype.sceneId = 0;

    /**
     * ReqEnterScenePacket mapId.
     * @member {number} mapId
     * @memberof ReqEnterScenePacket
     * @instance
     */
    ReqEnterScenePacket.prototype.mapId = 0;

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
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.playerId);
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sceneId);
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.mapId);
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
                message.playerId = reader.int32();
                break;
            case 2:
                message.sceneId = reader.int32();
                break;
            case 3:
                message.mapId = reader.int32();
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
            if (!$util.isInteger(message.playerId))
                return "playerId: integer expected";
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (!$util.isInteger(message.sceneId))
                return "sceneId: integer expected";
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (!$util.isInteger(message.mapId))
                return "mapId: integer expected";
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
            message.playerId = object.playerId | 0;
        if (object.sceneId != null)
            message.sceneId = object.sceneId | 0;
        if (object.mapId != null)
            message.mapId = object.mapId | 0;
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
            object.playerId = 0;
            object.sceneId = 0;
            object.mapId = 0;
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            object.sceneId = message.sceneId;
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            object.mapId = message.mapId;
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
     * @property {number|null} [mapId] RespEnterScenePacket mapId
     * @property {number|null} [sceneId] RespEnterScenePacket sceneId
     * @property {Array.<IPlayerInfo>|null} [mapObject] RespEnterScenePacket mapObject
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
        this.mapObject = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespEnterScenePacket mapId.
     * @member {number} mapId
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.mapId = 0;

    /**
     * RespEnterScenePacket sceneId.
     * @member {number} sceneId
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.sceneId = 0;

    /**
     * RespEnterScenePacket mapObject.
     * @member {Array.<IPlayerInfo>} mapObject
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
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mapId);
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.sceneId);
        if (message.mapObject != null && message.mapObject.length)
            for (var i = 0; i < message.mapObject.length; ++i)
                $root.PlayerInfo.encode(message.mapObject[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
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
                message.mapId = reader.int32();
                break;
            case 2:
                message.sceneId = reader.int32();
                break;
            case 3:
                if (!(message.mapObject && message.mapObject.length))
                    message.mapObject = [];
                message.mapObject.push($root.PlayerInfo.decode(reader, reader.uint32()));
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
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            if (!$util.isInteger(message.mapId))
                return "mapId: integer expected";
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            if (!$util.isInteger(message.sceneId))
                return "sceneId: integer expected";
        if (message.mapObject != null && message.hasOwnProperty("mapObject")) {
            if (!Array.isArray(message.mapObject))
                return "mapObject: array expected";
            for (var i = 0; i < message.mapObject.length; ++i) {
                var error = $root.PlayerInfo.verify(message.mapObject[i]);
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
        if (object.mapId != null)
            message.mapId = object.mapId | 0;
        if (object.sceneId != null)
            message.sceneId = object.sceneId | 0;
        if (object.mapObject) {
            if (!Array.isArray(object.mapObject))
                throw TypeError(".RespEnterScenePacket.mapObject: array expected");
            message.mapObject = [];
            for (var i = 0; i < object.mapObject.length; ++i) {
                if (typeof object.mapObject[i] !== "object")
                    throw TypeError(".RespEnterScenePacket.mapObject: object expected");
                message.mapObject[i] = $root.PlayerInfo.fromObject(object.mapObject[i]);
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
        if (options.arrays || options.defaults)
            object.mapObject = [];
        if (options.defaults) {
            object.mapId = 0;
            object.sceneId = 0;
        }
        if (message.mapId != null && message.hasOwnProperty("mapId"))
            object.mapId = message.mapId;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            object.sceneId = message.sceneId;
        if (message.mapObject && message.mapObject.length) {
            object.mapObject = [];
            for (var j = 0; j < message.mapObject.length; ++j)
                object.mapObject[j] = $root.PlayerInfo.toObject(message.mapObject[j], options);
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

$root.PlayerInfo = (function() {

    /**
     * Properties of a PlayerInfo.
     * @exports IPlayerInfo
     * @interface IPlayerInfo
     * @property {number|Long|null} [playerId] PlayerInfo playerId
     * @property {string|null} [playerName] PlayerInfo playerName
     * @property {string|null} [role] PlayerInfo role
     */

    /**
     * Constructs a new PlayerInfo.
     * @exports PlayerInfo
     * @classdesc Represents a PlayerInfo.
     * @implements IPlayerInfo
     * @constructor
     * @param {IPlayerInfo=} [properties] Properties to set
     */
    function PlayerInfo(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PlayerInfo playerId.
     * @member {number|Long} playerId
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * PlayerInfo playerName.
     * @member {string} playerName
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.playerName = "";

    /**
     * PlayerInfo role.
     * @member {string} role
     * @memberof PlayerInfo
     * @instance
     */
    PlayerInfo.prototype.role = "";

    /**
     * Creates a new PlayerInfo instance using the specified properties.
     * @function create
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo=} [properties] Properties to set
     * @returns {PlayerInfo} PlayerInfo instance
     */
    PlayerInfo.create = function create(properties) {
        return new PlayerInfo(properties);
    };

    /**
     * Encodes the specified PlayerInfo message. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encode
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.playerName);
        if (message.role != null && message.hasOwnProperty("role"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.role);
        return writer;
    };

    /**
     * Encodes the specified PlayerInfo message, length delimited. Does not implicitly {@link PlayerInfo.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PlayerInfo
     * @static
     * @param {IPlayerInfo} message PlayerInfo message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PlayerInfo.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer.
     * @function decode
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.PlayerInfo();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.playerId = reader.int64();
                break;
            case 2:
                message.playerName = reader.string();
                break;
            case 3:
                message.role = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PlayerInfo message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PlayerInfo
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PlayerInfo} PlayerInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PlayerInfo.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PlayerInfo message.
     * @function verify
     * @memberof PlayerInfo
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PlayerInfo.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (!$util.isInteger(message.playerId) && !(message.playerId && $util.isInteger(message.playerId.low) && $util.isInteger(message.playerId.high)))
                return "playerId: integer|Long expected";
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            if (!$util.isString(message.playerName))
                return "playerName: string expected";
        if (message.role != null && message.hasOwnProperty("role"))
            if (!$util.isString(message.role))
                return "role: string expected";
        return null;
    };

    /**
     * Creates a PlayerInfo message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PlayerInfo
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PlayerInfo} PlayerInfo
     */
    PlayerInfo.fromObject = function fromObject(object) {
        if (object instanceof $root.PlayerInfo)
            return object;
        var message = new $root.PlayerInfo();
        if (object.playerId != null)
            if ($util.Long)
                (message.playerId = $util.Long.fromValue(object.playerId)).unsigned = false;
            else if (typeof object.playerId === "string")
                message.playerId = parseInt(object.playerId, 10);
            else if (typeof object.playerId === "number")
                message.playerId = object.playerId;
            else if (typeof object.playerId === "object")
                message.playerId = new $util.LongBits(object.playerId.low >>> 0, object.playerId.high >>> 0).toNumber();
        if (object.playerName != null)
            message.playerName = String(object.playerName);
        if (object.role != null)
            message.role = String(object.role);
        return message;
    };

    /**
     * Creates a plain object from a PlayerInfo message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PlayerInfo
     * @static
     * @param {PlayerInfo} message PlayerInfo
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PlayerInfo.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.playerId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.playerId = options.longs === String ? "0" : 0;
            object.playerName = "";
            object.role = "";
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
        if (message.playerName != null && message.hasOwnProperty("playerName"))
            object.playerName = message.playerName;
        if (message.role != null && message.hasOwnProperty("role"))
            object.role = message.role;
        return object;
    };

    /**
     * Converts this PlayerInfo to JSON.
     * @function toJSON
     * @memberof PlayerInfo
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PlayerInfo.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return PlayerInfo;
})();

module.exports = $root;
