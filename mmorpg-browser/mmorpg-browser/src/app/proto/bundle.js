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
     * @property {number|Long|null} [playerId] RespCreateRolePacket playerId
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
        }
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            if (typeof message.playerId === "number")
                object.playerId = options.longs === String ? String(message.playerId) : message.playerId;
            else
                object.playerId = options.longs === String ? $util.Long.prototype.toString.call(message.playerId) : options.longs === Number ? new $util.LongBits(message.playerId.low >>> 0, message.playerId.high >>> 0).toNumber() : message.playerId;
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

$root.ReqEnterScenePacket = (function() {

    /**
     * Properties of a ReqEnterScenePacket.
     * @exports IReqEnterScenePacket
     * @interface IReqEnterScenePacket
     * @property {number|null} [playerId] ReqEnterScenePacket playerId
     * @property {number|null} [sceneId] ReqEnterScenePacket sceneId
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
        }
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            object.playerId = message.playerId;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            object.sceneId = message.sceneId;
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
     * @property {number|null} [sceneId] RespEnterScenePacket sceneId
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
        this.mapObject = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespEnterScenePacket sceneId.
     * @member {number} sceneId
     * @memberof RespEnterScenePacket
     * @instance
     */
    RespEnterScenePacket.prototype.sceneId = 0;

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
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.sceneId);
        if (message.mapObject != null && message.mapObject.length)
            for (var i = 0; i < message.mapObject.length; ++i)
                $root.ObjectInMapInfo.encode(message.mapObject[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
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
                message.sceneId = reader.int32();
                break;
            case 2:
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
            if (!$util.isInteger(message.sceneId))
                return "sceneId: integer expected";
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
            message.sceneId = object.sceneId | 0;
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
        if (options.arrays || options.defaults)
            object.mapObject = [];
        if (options.defaults)
            object.sceneId = 0;
        if (message.sceneId != null && message.hasOwnProperty("sceneId"))
            object.sceneId = message.sceneId;
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
        if (message.objectType != null && message.hasOwnProperty("objectType"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.objectType);
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

$root.RespBroadcastEnterWorldPacket = (function() {

    /**
     * Properties of a RespBroadcastEnterWorldPacket.
     * @exports IRespBroadcastEnterWorldPacket
     * @interface IRespBroadcastEnterWorldPacket
     * @property {number|Long|null} [playerId] RespBroadcastEnterWorldPacket playerId
     * @property {string|null} [result] RespBroadcastEnterWorldPacket result
     */

    /**
     * Constructs a new RespBroadcastEnterWorldPacket.
     * @exports RespBroadcastEnterWorldPacket
     * @classdesc Represents a RespBroadcastEnterWorldPacket.
     * @implements IRespBroadcastEnterWorldPacket
     * @constructor
     * @param {IRespBroadcastEnterWorldPacket=} [properties] Properties to set
     */
    function RespBroadcastEnterWorldPacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RespBroadcastEnterWorldPacket playerId.
     * @member {number|Long} playerId
     * @memberof RespBroadcastEnterWorldPacket
     * @instance
     */
    RespBroadcastEnterWorldPacket.prototype.playerId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * RespBroadcastEnterWorldPacket result.
     * @member {string} result
     * @memberof RespBroadcastEnterWorldPacket
     * @instance
     */
    RespBroadcastEnterWorldPacket.prototype.result = "";

    /**
     * Creates a new RespBroadcastEnterWorldPacket instance using the specified properties.
     * @function create
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {IRespBroadcastEnterWorldPacket=} [properties] Properties to set
     * @returns {RespBroadcastEnterWorldPacket} RespBroadcastEnterWorldPacket instance
     */
    RespBroadcastEnterWorldPacket.create = function create(properties) {
        return new RespBroadcastEnterWorldPacket(properties);
    };

    /**
     * Encodes the specified RespBroadcastEnterWorldPacket message. Does not implicitly {@link RespBroadcastEnterWorldPacket.verify|verify} messages.
     * @function encode
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {IRespBroadcastEnterWorldPacket} message RespBroadcastEnterWorldPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespBroadcastEnterWorldPacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.playerId != null && message.hasOwnProperty("playerId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.playerId);
        if (message.result != null && message.hasOwnProperty("result"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.result);
        return writer;
    };

    /**
     * Encodes the specified RespBroadcastEnterWorldPacket message, length delimited. Does not implicitly {@link RespBroadcastEnterWorldPacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {IRespBroadcastEnterWorldPacket} message RespBroadcastEnterWorldPacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RespBroadcastEnterWorldPacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RespBroadcastEnterWorldPacket message from the specified reader or buffer.
     * @function decode
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RespBroadcastEnterWorldPacket} RespBroadcastEnterWorldPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespBroadcastEnterWorldPacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RespBroadcastEnterWorldPacket();
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
     * Decodes a RespBroadcastEnterWorldPacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RespBroadcastEnterWorldPacket} RespBroadcastEnterWorldPacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RespBroadcastEnterWorldPacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RespBroadcastEnterWorldPacket message.
     * @function verify
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RespBroadcastEnterWorldPacket.verify = function verify(message) {
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
     * Creates a RespBroadcastEnterWorldPacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RespBroadcastEnterWorldPacket} RespBroadcastEnterWorldPacket
     */
    RespBroadcastEnterWorldPacket.fromObject = function fromObject(object) {
        if (object instanceof $root.RespBroadcastEnterWorldPacket)
            return object;
        var message = new $root.RespBroadcastEnterWorldPacket();
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
     * Creates a plain object from a RespBroadcastEnterWorldPacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RespBroadcastEnterWorldPacket
     * @static
     * @param {RespBroadcastEnterWorldPacket} message RespBroadcastEnterWorldPacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RespBroadcastEnterWorldPacket.toObject = function toObject(message, options) {
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
     * Converts this RespBroadcastEnterWorldPacket to JSON.
     * @function toJSON
     * @memberof RespBroadcastEnterWorldPacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RespBroadcastEnterWorldPacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return RespBroadcastEnterWorldPacket;
})();

module.exports = $root;
