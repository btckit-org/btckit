import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';
import { PaymentTypes } from './get-addresses';

// Implements BIP-322
// https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki
type Bip322MessageTypes = 'legacy' | 'bip322';

export interface SignMessageResponseParams {
  type?: Bip322MessageTypes;
  message: string;
  paymentType: PaymentTypes;
}

export interface SignMessageResponseBody {
  [key: string]: unknown;

  /**
   * Base64 encoded signature
   */
  signature: string;

  /**
   * Address that signed the message
   */
  address: string;
}

export type SignMessageRequest = RpcRequest<'signMessage', SignMessageResponseParams>;

export type SignMessageResponse = RpcResponse<SignMessageResponseBody>;

export type DefineSignMessageMethod = DefineRpcMethod<SignMessageRequest, SignMessageResponse>;
