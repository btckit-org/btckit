import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export interface SendTransferResponseParams {
  address: string;
  amount: string;
}

export interface SendTransferResponseBody {
  txid: string;
}

export type SendTransferRequest = RpcRequest<'sendTransfer', SendTransferResponseParams>;

export type SendTransferResponse = RpcResponse<SendTransferResponseBody>;

export type DefineSendTransferMethod = DefineRpcMethod<SendTransferRequest, SendTransferResponse>;
