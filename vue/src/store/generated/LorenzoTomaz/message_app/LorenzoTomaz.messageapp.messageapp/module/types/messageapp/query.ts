/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Params } from "../messageapp/params";
import { Chat } from "../messageapp/chat";
import {
  PageRequest,
  PageResponse,
} from "../cosmos/base/query/v1beta1/pagination";
import { ChatCounter } from "../messageapp/chat_counter";
import { Messages } from "../messageapp/messages";

export const protobufPackage = "LorenzoTomaz.messageapp.messageapp";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryGetChatRequest {
  index: string;
}

export interface QueryGetChatResponse {
  chat: Chat | undefined;
}

export interface QueryAllChatRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllChatResponse {
  chat: Chat[];
  pagination: PageResponse | undefined;
}

export interface QueryGetChatCounterRequest {}

export interface QueryGetChatCounterResponse {
  ChatCounter: ChatCounter | undefined;
}

export interface QueryGetMessagesRequest {
  index: string;
}

export interface QueryGetMessagesResponse {
  messages: Messages | undefined;
}

export interface QueryAllMessagesRequest {
  pagination: PageRequest | undefined;
}

export interface QueryAllMessagesResponse {
  messages: Messages[];
  pagination: PageResponse | undefined;
}

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseQueryGetChatRequest: object = { index: "" };

export const QueryGetChatRequest = {
  encode(
    message: QueryGetChatRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChatRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetChatRequest } as QueryGetChatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChatRequest {
    const message = { ...baseQueryGetChatRequest } as QueryGetChatRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetChatRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetChatRequest>): QueryGetChatRequest {
    const message = { ...baseQueryGetChatRequest } as QueryGetChatRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetChatResponse: object = {};

export const QueryGetChatResponse = {
  encode(
    message: QueryGetChatResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.chat !== undefined) {
      Chat.encode(message.chat, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetChatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryGetChatResponse } as QueryGetChatResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chat = Chat.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChatResponse {
    const message = { ...baseQueryGetChatResponse } as QueryGetChatResponse;
    if (object.chat !== undefined && object.chat !== null) {
      message.chat = Chat.fromJSON(object.chat);
    } else {
      message.chat = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChatResponse): unknown {
    const obj: any = {};
    message.chat !== undefined &&
      (obj.chat = message.chat ? Chat.toJSON(message.chat) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryGetChatResponse>): QueryGetChatResponse {
    const message = { ...baseQueryGetChatResponse } as QueryGetChatResponse;
    if (object.chat !== undefined && object.chat !== null) {
      message.chat = Chat.fromPartial(object.chat);
    } else {
      message.chat = undefined;
    }
    return message;
  },
};

const baseQueryAllChatRequest: object = {};

export const QueryAllChatRequest = {
  encode(
    message: QueryAllChatRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChatRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllChatRequest } as QueryAllChatRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChatRequest {
    const message = { ...baseQueryAllChatRequest } as QueryAllChatRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChatRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllChatRequest>): QueryAllChatRequest {
    const message = { ...baseQueryAllChatRequest } as QueryAllChatRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllChatResponse: object = {};

export const QueryAllChatResponse = {
  encode(
    message: QueryAllChatResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.chat) {
      Chat.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllChatResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllChatResponse } as QueryAllChatResponse;
    message.chat = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.chat.push(Chat.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllChatResponse {
    const message = { ...baseQueryAllChatResponse } as QueryAllChatResponse;
    message.chat = [];
    if (object.chat !== undefined && object.chat !== null) {
      for (const e of object.chat) {
        message.chat.push(Chat.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllChatResponse): unknown {
    const obj: any = {};
    if (message.chat) {
      obj.chat = message.chat.map((e) => (e ? Chat.toJSON(e) : undefined));
    } else {
      obj.chat = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllChatResponse>): QueryAllChatResponse {
    const message = { ...baseQueryAllChatResponse } as QueryAllChatResponse;
    message.chat = [];
    if (object.chat !== undefined && object.chat !== null) {
      for (const e of object.chat) {
        message.chat.push(Chat.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryGetChatCounterRequest: object = {};

export const QueryGetChatCounterRequest = {
  encode(
    _: QueryGetChatCounterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChatCounterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChatCounterRequest,
    } as QueryGetChatCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryGetChatCounterRequest {
    const message = {
      ...baseQueryGetChatCounterRequest,
    } as QueryGetChatCounterRequest;
    return message;
  },

  toJSON(_: QueryGetChatCounterRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryGetChatCounterRequest>
  ): QueryGetChatCounterRequest {
    const message = {
      ...baseQueryGetChatCounterRequest,
    } as QueryGetChatCounterRequest;
    return message;
  },
};

const baseQueryGetChatCounterResponse: object = {};

export const QueryGetChatCounterResponse = {
  encode(
    message: QueryGetChatCounterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.ChatCounter !== undefined) {
      ChatCounter.encode(
        message.ChatCounter,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetChatCounterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetChatCounterResponse,
    } as QueryGetChatCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ChatCounter = ChatCounter.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetChatCounterResponse {
    const message = {
      ...baseQueryGetChatCounterResponse,
    } as QueryGetChatCounterResponse;
    if (object.ChatCounter !== undefined && object.ChatCounter !== null) {
      message.ChatCounter = ChatCounter.fromJSON(object.ChatCounter);
    } else {
      message.ChatCounter = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetChatCounterResponse): unknown {
    const obj: any = {};
    message.ChatCounter !== undefined &&
      (obj.ChatCounter = message.ChatCounter
        ? ChatCounter.toJSON(message.ChatCounter)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetChatCounterResponse>
  ): QueryGetChatCounterResponse {
    const message = {
      ...baseQueryGetChatCounterResponse,
    } as QueryGetChatCounterResponse;
    if (object.ChatCounter !== undefined && object.ChatCounter !== null) {
      message.ChatCounter = ChatCounter.fromPartial(object.ChatCounter);
    } else {
      message.ChatCounter = undefined;
    }
    return message;
  },
};

const baseQueryGetMessagesRequest: object = { index: "" };

export const QueryGetMessagesRequest = {
  encode(
    message: QueryGetMessagesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetMessagesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMessagesRequest {
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    return message;
  },

  toJSON(message: QueryGetMessagesRequest): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMessagesRequest>
  ): QueryGetMessagesRequest {
    const message = {
      ...baseQueryGetMessagesRequest,
    } as QueryGetMessagesRequest;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    return message;
  },
};

const baseQueryGetMessagesResponse: object = {};

export const QueryGetMessagesResponse = {
  encode(
    message: QueryGetMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.messages !== undefined) {
      Messages.encode(message.messages, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryGetMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages = Messages.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryGetMessagesResponse {
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    if (object.messages !== undefined && object.messages !== null) {
      message.messages = Messages.fromJSON(object.messages);
    } else {
      message.messages = undefined;
    }
    return message;
  },

  toJSON(message: QueryGetMessagesResponse): unknown {
    const obj: any = {};
    message.messages !== undefined &&
      (obj.messages = message.messages
        ? Messages.toJSON(message.messages)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryGetMessagesResponse>
  ): QueryGetMessagesResponse {
    const message = {
      ...baseQueryGetMessagesResponse,
    } as QueryGetMessagesResponse;
    if (object.messages !== undefined && object.messages !== null) {
      message.messages = Messages.fromPartial(object.messages);
    } else {
      message.messages = undefined;
    }
    return message;
  },
};

const baseQueryAllMessagesRequest: object = {};

export const QueryAllMessagesRequest = {
  encode(
    message: QueryAllMessagesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllMessagesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessagesRequest {
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMessagesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMessagesRequest>
  ): QueryAllMessagesRequest {
    const message = {
      ...baseQueryAllMessagesRequest,
    } as QueryAllMessagesRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryAllMessagesResponse: object = {};

export const QueryAllMessagesResponse = {
  encode(
    message: QueryAllMessagesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.messages) {
      Messages.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllMessagesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.messages = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.messages.push(Messages.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllMessagesResponse {
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Messages.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryAllMessagesResponse): unknown {
    const obj: any = {};
    if (message.messages) {
      obj.messages = message.messages.map((e) =>
        e ? Messages.toJSON(e) : undefined
      );
    } else {
      obj.messages = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllMessagesResponse>
  ): QueryAllMessagesResponse {
    const message = {
      ...baseQueryAllMessagesResponse,
    } as QueryAllMessagesResponse;
    message.messages = [];
    if (object.messages !== undefined && object.messages !== null) {
      for (const e of object.messages) {
        message.messages.push(Messages.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a Chat by index. */
  Chat(request: QueryGetChatRequest): Promise<QueryGetChatResponse>;
  /** Queries a list of Chat items. */
  ChatAll(request: QueryAllChatRequest): Promise<QueryAllChatResponse>;
  /** Queries a ChatCounter by index. */
  ChatCounter(
    request: QueryGetChatCounterRequest
  ): Promise<QueryGetChatCounterResponse>;
  /** Queries a Messages by index. */
  Messages(request: QueryGetMessagesRequest): Promise<QueryGetMessagesResponse>;
  /** Queries a list of Messages items. */
  MessagesAll(
    request: QueryAllMessagesRequest
  ): Promise<QueryAllMessagesResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "Params",
      data
    );
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  Chat(request: QueryGetChatRequest): Promise<QueryGetChatResponse> {
    const data = QueryGetChatRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "Chat",
      data
    );
    return promise.then((data) =>
      QueryGetChatResponse.decode(new Reader(data))
    );
  }

  ChatAll(request: QueryAllChatRequest): Promise<QueryAllChatResponse> {
    const data = QueryAllChatRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "ChatAll",
      data
    );
    return promise.then((data) =>
      QueryAllChatResponse.decode(new Reader(data))
    );
  }

  ChatCounter(
    request: QueryGetChatCounterRequest
  ): Promise<QueryGetChatCounterResponse> {
    const data = QueryGetChatCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "ChatCounter",
      data
    );
    return promise.then((data) =>
      QueryGetChatCounterResponse.decode(new Reader(data))
    );
  }

  Messages(
    request: QueryGetMessagesRequest
  ): Promise<QueryGetMessagesResponse> {
    const data = QueryGetMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "Messages",
      data
    );
    return promise.then((data) =>
      QueryGetMessagesResponse.decode(new Reader(data))
    );
  }

  MessagesAll(
    request: QueryAllMessagesRequest
  ): Promise<QueryAllMessagesResponse> {
    const data = QueryAllMessagesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "LorenzoTomaz.messageapp.messageapp.Query",
      "MessagesAll",
      data
    );
    return promise.then((data) =>
      QueryAllMessagesResponse.decode(new Reader(data))
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
