import { RpcRequest } from 'src/rpc';

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
  amount?: number;
}

export type RequestAccounts = RpcRequest<
  'requestAccounts',
  {
    addresses: AddressResponseBody;
  }
>;
