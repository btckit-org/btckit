import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export interface SendTransferRequestParams {
  account?: number;
  address: string;
  amount: string;
  network?: any;
}

export interface SendTransferResponseBody {
  txid: string;
}

export type SendTransferRequest = RpcRequest<'sendTransfer', SendTransferRequestParams>;

export type SendTransferResponse = RpcResponse<SendTransferResponseBody>;

export type DefineSendTransferMethod = DefineRpcMethod<SendTransferRequest, SendTransferResponse>;
