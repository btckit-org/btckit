import { RpcRequest } from 'src/rpc';

export type SignPsbt = RpcRequest<
  'signPstb',
  {
    psbtHex: string;
    inputToSign: {
      sigHash: any[];
    }[];
    network: any;
  }
>;
