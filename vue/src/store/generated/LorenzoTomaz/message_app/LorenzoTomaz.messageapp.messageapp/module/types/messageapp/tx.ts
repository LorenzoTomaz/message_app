/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "LorenzoTomaz.messageapp.messageapp";

export interface MsgSendMessage {
  chatId: string;
  sender: string;
  receiver: string;
  body: string;
  creator: string;
}

export interface MsgSendMessageResponse {
  chatId: string;
  messageId: string;
}

export interface MsgCreateChat {
  creator: string;
  sender: string;
  receiver: string;
}

export interface MsgCreateChatResponse {
  idValue: string;
}

const baseMsgSendMessage: object = {
  chatId: "",
  sender: "",
  receiver: "",
  body: "",
  creator: "",
};

export const MsgSendMessage = {
  encode(message: MsgSendMessage, writer: Writer = Writer.create()): Writer {
    if (message.chatId !== "") {
      writer.uint32(10).string(message.chatId);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    if (message.body !== "") {
      writer.uint32(34).string(message.body);
    }
    if (message.creator !== "") {
      writer.uint32(42).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendMessage {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendMessage } as MsgSendMessage;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        case 4:
          message.body = reader.string();
          break;
        case 5:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendMessage {
    const message = { ...baseMsgSendMessage } as MsgSendMessage;
    if (object.chatId !== undefined && object.chatId !== null) {
      message.chatId = String(object.chatId);
    } else {
      message.chatId = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = String(object.body);
    } else {
      message.body = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgSendMessage): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.body !== undefined && (obj.body = message.body);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSendMessage>): MsgSendMessage {
    const message = { ...baseMsgSendMessage } as MsgSendMessage;
    if (object.chatId !== undefined && object.chatId !== null) {
      message.chatId = object.chatId;
    } else {
      message.chatId = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.body !== undefined && object.body !== null) {
      message.body = object.body;
    } else {
      message.body = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgSendMessageResponse: object = { chatId: "", messageId: "" };

export const MsgSendMessageResponse = {
  encode(
    message: MsgSendMessageResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chatId !== "") {
      writer.uint32(10).string(message.chatId);
    }
    if (message.messageId !== "") {
      writer.uint32(18).string(message.messageId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSendMessageResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSendMessageResponse } as MsgSendMessageResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chatId = reader.string();
          break;
        case 2:
          message.messageId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSendMessageResponse {
    const message = { ...baseMsgSendMessageResponse } as MsgSendMessageResponse;
    if (object.chatId !== undefined && object.chatId !== null) {
      message.chatId = String(object.chatId);
    } else {
      message.chatId = "";
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = String(object.messageId);
    } else {
      message.messageId = "";
    }
    return message;
  },

  toJSON(message: MsgSendMessageResponse): unknown {
    const obj: any = {};
    message.chatId !== undefined && (obj.chatId = message.chatId);
    message.messageId !== undefined && (obj.messageId = message.messageId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSendMessageResponse>
  ): MsgSendMessageResponse {
    const message = { ...baseMsgSendMessageResponse } as MsgSendMessageResponse;
    if (object.chatId !== undefined && object.chatId !== null) {
      message.chatId = object.chatId;
    } else {
      message.chatId = "";
    }
    if (object.messageId !== undefined && object.messageId !== null) {
      message.messageId = object.messageId;
    } else {
      message.messageId = "";
    }
    return message;
  },
};

const baseMsgCreateChat: object = { creator: "", sender: "", receiver: "" };

export const MsgCreateChat = {
  encode(message: MsgCreateChat, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(26).string(message.receiver);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChat {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChat } as MsgCreateChat;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.sender = reader.string();
          break;
        case 3:
          message.receiver = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChat {
    const message = { ...baseMsgCreateChat } as MsgCreateChat;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    return message;
  },

  toJSON(message: MsgCreateChat): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateChat>): MsgCreateChat {
    const message = { ...baseMsgCreateChat } as MsgCreateChat;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    return message;
  },
};

const baseMsgCreateChatResponse: object = { idValue: "" };

export const MsgCreateChatResponse = {
  encode(
    message: MsgCreateChatResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.idValue !== "") {
      writer.uint32(10).string(message.idValue);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateChatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateChatResponse } as MsgCreateChatResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.idValue = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateChatResponse {
    const message = { ...baseMsgCreateChatResponse } as MsgCreateChatResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = String(object.idValue);
    } else {
      message.idValue = "";
    }
    return message;
  },

  toJSON(message: MsgCreateChatResponse): unknown {
    const obj: any = {};
    message.idValue !== undefined && (obj.idValue = message.idValue);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCreateChatResponse>
  ): MsgCreateChatResponse {
    const message = { ...baseMsgCreateChatResponse } as MsgCreateChatResponse;
    if (object.idValue !== undefined && object.idValue !== null) {
      message.idValue = object.idValue;
    } else {
      message.idValue = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  SendMessage(request: MsgSendMessage): Promise<MsgSendMessageResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateChat(request: MsgCreateChat): Promise<MsgCreateChatResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  SendMessage(request: MsgSendMessage): Promise<MsgSendMessageResponse> {
    const data = MsgSendMessage.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Msg",
      "SendMessage",
      data
    );
    return promise.then((data) =>
      MsgSendMessageResponse.decode(new Reader(data))
    );
  }

  CreateChat(request: MsgCreateChat): Promise<MsgCreateChatResponse> {
    const data = MsgCreateChat.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Msg",
      "CreateChat",
      data
    );
    return promise.then((data) =>
      MsgCreateChatResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
