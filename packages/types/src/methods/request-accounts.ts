import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export type PaymentTypes = 'p2wpkh' | 'p2wpkh-p2sh' | 'p2tr';

export interface BtcAddress {
  type: PaymentTypes;
  address: string;
}

export interface AddressResponseBody {
  addresses: BtcAddress[];
}

export interface Params {
  types: PaymentTypes[];
}

export type RequestAccountsRequest = RpcRequest<'requestAccounts'>;

export type RequestAccountsResponse = RpcResponse<AddressResponseBody>;

export type DefineRequestAccountsMethod = DefineRpcMethod<
  RequestAccountsRequest,
  RequestAccountsResponse
>;
