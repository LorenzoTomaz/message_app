/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "LorenzoTomaz.messageapp.messageapp";

export interface Chat {
  index: string;
  user: string;
  receiver: string;
  messageCount: number;
}

const baseChat: object = { index: "", user: "", receiver: "", messageCount: 0 };

export const Chat = {
  encode(message: Chat, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.user !== "") {
      writer.uint32(18).string(message.user);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.messageCount !== 0) {
      writer.uint32(32).uint64(message.messageCount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Chat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChat } as Chat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.user = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.messageCount = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Chat {
    const message = { ...baseChat } as Chat;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user);
    } else {
      message.user = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.messageCount !== undefined && object.messageCount !== null) {
      message.messageCount = Number(object.messageCount);
    } else {
      message.messageCount = 0;
    }
    return message;
  },

  toJSON(message: Chat): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.user !== undefined && (obj.user = message.user);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.messageCount !== undefined &&
      (obj.messageCount = message.messageCount);
    return obj;
  },

  fromPartial(object: DeepPartial<Chat>): Chat {
    const message = { ...baseChat } as Chat;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user;
    } else {
      message.user = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.messageCount !== undefined && object.messageCount !== null) {
      message.messageCount = object.messageCount;
    } else {
      message.messageCount = 0;
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
