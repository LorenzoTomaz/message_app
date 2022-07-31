/* eslint-disable */
import { Params } from "../messageapp/params";
import { Chat } from "../messageapp/chat";
import { ChatCounter } from "../messageapp/chat_counter";
import { Messages } from "../messageapp/messages";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "LorenzoTomaz.messageapp.messageapp";

/** GenesisState defines the messageapp module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  chatList: Chat[];
  chatCounter: ChatCounter | undefined;
  /** this line is used by starport scaffolding # genesis/proto/state */
  messagesList: Messages[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.chatList) {
      Chat.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.chatCounter !== undefined) {
      ChatCounter.encode(
        message.chatCounter,
        writer.uint32(26).fork()
      ).ldelim();
    }
    for (const v of message.messagesList) {
      Messages.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.chatList = [];
    message.messagesList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.chatList.push(Chat.decode(reader, reader.uint32()));
          break;
        case 3:
          message.chatCounter = ChatCounter.decode(reader, reader.uint32());
          break;
        case 4:
          message.messagesList.push(Messages.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.chatList = [];
    message.messagesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.chatList !== undefined && object.chatList !== null) {
      for (const e of object.chatList) {
        message.chatList.push(Chat.fromJSON(e));
      }
    }
    if (object.chatCounter !== undefined && object.chatCounter !== null) {
      message.chatCounter = ChatCounter.fromJSON(object.chatCounter);
    } else {
      message.chatCounter = undefined;
    }
    if (object.messagesList !== undefined && object.messagesList !== null) {
      for (const e of object.messagesList) {
        message.messagesList.push(Messages.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.chatList) {
      obj.chatList = message.chatList.map((e) =>
        e ? Chat.toJSON(e) : undefined
      );
    } else {
      obj.chatList = [];
    }
    message.chatCounter !== undefined &&
      (obj.chatCounter = message.chatCounter
        ? ChatCounter.toJSON(message.chatCounter)
        : undefined);
    if (message.messagesList) {
      obj.messagesList = message.messagesList.map((e) =>
        e ? Messages.toJSON(e) : undefined
      );
    } else {
      obj.messagesList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.chatList = [];
    message.messagesList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.chatList !== undefined && object.chatList !== null) {
      for (const e of object.chatList) {
        message.chatList.push(Chat.fromPartial(e));
      }
    }
    if (object.chatCounter !== undefined && object.chatCounter !== null) {
      message.chatCounter = ChatCounter.fromPartial(object.chatCounter);
    } else {
      message.chatCounter = undefined;
    }
    if (object.messagesList !== undefined && object.messagesList !== null) {
      for (const e of object.messagesList) {
        message.messagesList.push(Messages.fromPartial(e));
      }
    }
    return message;
  },
};

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
