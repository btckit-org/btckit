import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export interface GetInfoResponseBody {
  version: string;
  supportedMethods?: string[];
}

export type GetInfoRequest = RpcRequest<'getInfo'>;

export type GetInfoResponse = RpcResponse<GetInfoResponseBody>;

export type DefineGetInfoMethod = DefineRpcMethod<GetInfoRequest, GetInfoResponse>;
