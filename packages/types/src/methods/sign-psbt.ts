import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export type SignPsbtRequest = RpcRequest<'signPstb'>;

export type SignPsbtResponse = RpcResponse<{
  psbtHex: string;
  inputToSign: {
    sigHash: any[];
  }[];
  network: any;
}>;

export type DefineSignPsbtMethod = DefineRpcMethod<SignPsbtRequest, SignPsbtResponse>;
