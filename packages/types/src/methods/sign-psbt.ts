import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export enum SignatureHash {
  DEFAULT = 0,
  ALL = 1,
  NONE = 2,
  SINGLE = 3,
  ANYONECANPAY = 0x80,
}

export interface SignPsbtRequestParams {
  account?: number;
  allowedSighash?: SignatureHash[];
  hex: string;
  network?: any;
  signAtIndex?: number | number[];
}

export interface SignPsbtResponseBody {
  txid: string;
}

export type SignPsbtRequest = RpcRequest<'signPsbt', SignPsbtRequestParams>;

export type SignPsbtResponse = RpcResponse<SignPsbtResponseBody>;

export type DefineSignPsbtMethod = DefineRpcMethod<SignPsbtRequest, SignPsbtResponse>;
