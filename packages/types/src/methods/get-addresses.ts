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

export type GetAddressesRequest = RpcRequest<'getAddresses'>;

export type GetAddressesResponse = RpcResponse<AddressResponseBody>;

export type DefineGetAddressesMethod = DefineRpcMethod<GetAddressesRequest, GetAddressesResponse>;
