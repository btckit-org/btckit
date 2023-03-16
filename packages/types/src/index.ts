import { ValueOf } from './utils';

import './rpc';
import { DefineGetInfoMethod } from './methods/get-info';
import { DefineSignPsbtMethod } from './methods/sign-psbt';
import { DefineRequestAccountsMethod } from './methods/request-accounts';

export * from './rpc';
export * from './methods/get-info';
export * from './methods/sign-psbt';
export * from './methods/request-accounts';

export type BtcKitMethodMap = DefineGetInfoMethod &
  DefineRequestAccountsMethod &
  DefineSignPsbtMethod;

export type BtcKitRequests = ValueOf<BtcKitMethodMap>['request'];

export type BtcKitResponses = ValueOf<BtcKitMethodMap>['response'];

export type BtcKitMethodNames = keyof BtcKitMethodMap;

export type BtcKitRequestFn = {
  <T extends BtcKitMethodNames>(arg: T): Promise<BtcKitMethodMap[T]['response']>;
};

declare global {
  interface Window {
    btc?: {
      request: BtcKitRequestFn;
      listen(event: string): Promise<any>;
    };
  }
}
