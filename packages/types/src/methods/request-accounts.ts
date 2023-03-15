import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

type PaymentTypes = 'p2wpkh' | 'p2wpkh-p2sh' | 'p2tr';

interface AddressResponseBody {
  addresses: {
    type: PaymentTypes;
    address: string;
    derivationPath: string;
  }[];
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
