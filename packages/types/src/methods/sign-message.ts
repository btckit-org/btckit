import { DefineRpcMethod, RpcRequest, RpcResponse } from '../rpc';

// Implements BIP-322
// https://github.com/bitcoin/bips/blob/master/bip-0322.mediawiki
type Bip322MessageTypes = 'legacy' | 'simple' | 'full' | 'proof-of-funds';

export interface SignMessageResponseParams {
  type: Bip322MessageTypes;
  message: string;
}

export interface SignMessageResponseBody {
  /**
   * Base64 encoded signature
   */
  signature: string;
}

export type SignMessageRequest = RpcRequest<'signMessage', SignMessageResponseParams>;

export type SignMessageResponse = RpcResponse<SignMessageResponseBody>;

export type DefineSignMessageMethod = DefineRpcMethod<SignMessageRequest, SignMessageResponse>;
