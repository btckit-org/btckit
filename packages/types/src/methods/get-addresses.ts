import { AllowAdditionaProperties } from '../utils';
import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export type PaymentTypes = 'p2pkh' | 'p2sh' | 'p2wpkh-p2sh' | 'p2wpkh' | 'p2tr';

export interface BtcAddress extends AllowAdditionaProperties {
  type: PaymentTypes;
  address: string;
}

export interface AddressResponseBody extends AllowAdditionaProperties {
  addresses: BtcAddress[];
}

export interface Params extends AllowAdditionaProperties {
  types: PaymentTypes[];
}

export type GetAddressesRequest = RpcRequest<'getAddresses'>;

export type GetAddressesResponse = RpcResponse<AddressResponseBody>;

export type DefineGetAddressesMethod = DefineRpcMethod<GetAddressesRequest, GetAddressesResponse>;
