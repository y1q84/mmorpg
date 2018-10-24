/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
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
     * @property {string|null} [userName] ReqLoginPacket userName
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
     * ReqLoginPacket userName.
     * @member {string} userName
     * @memberof ReqLoginPacket
     * @instance
     */
    ReqLoginPacket.prototype.userName = "";

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
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
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
                message.userName = reader.string();
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
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
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
        if (object.userName != null)
            message.userName = String(object.userName);
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
            object.userName = "";
            object.password = "";
        }
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
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
     * @property {string|null} [userName] ReqLoginAuthPacket userName
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
     * ReqLoginAuthPacket userName.
     * @member {string} userName
     * @memberof ReqLoginAuthPacket
     * @instance
     */
    ReqLoginAuthPacket.prototype.userName = "";

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
        if (message.userName != null && message.hasOwnProperty("userName"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
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
                message.userName = reader.string();
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
        if (message.userName != null && message.hasOwnProperty("userName"))
            if (!$util.isString(message.userName))
                return "userName: string expected";
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
        if (object.userName != null)
            message.userName = String(object.userName);
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
            object.userName = "";
            object.password = "";
            object.key = "";
        }
        if (message.userName != null && message.hasOwnProperty("userName"))
            object.userName = message.userName;
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

module.exports = $root;
