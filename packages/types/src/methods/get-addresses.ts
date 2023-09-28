import { AllowAdditionalProperties } from '../utils';
import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

export type PaymentTypes = 'p2pkh' | 'p2sh' | 'p2wpkh-p2sh' | 'p2wpkh' | 'p2tr';

export interface BtcAddress extends AllowAdditionalProperties {
  type: PaymentTypes;
  address: string;
}

export interface GetAddressesResponseBody extends AllowAdditionalProperties {
  addresses: BtcAddress[];
}

export interface GetAddressesParams extends AllowAdditionalProperties {
  types: PaymentTypes[];
}

export type GetAddressesRequest = RpcRequest<'getAddresses', GetAddressesParams>;

export type GetAddressesResponse = RpcResponse<GetAddressesResponseBody>;

export type DefineGetAddressesMethod = DefineRpcMethod<GetAddressesRequest, GetAddressesResponse>;
