// comment

import { ValueOf } from './utils';

import './rpc';
import { DefineGetInfoMethod, GetInfoRequest, GetInfoResponse } from './methods/get-info';
import { DefineSignPsbtMethod, SignPsbtRequest } from './methods/sign-psbt';
import {
  DefineRequestAccountsMethod,
  RequestAccountsRequest,
  RequestAccountsResponse,
} from './methods/request-accounts';

export * from './rpc';

export type BtcKitMethodMap = DefineGetInfoMethod &
  DefineRequestAccountsMethod &
  DefineSignPsbtMethod;

export type BtcKitRequests = ValueOf<BtcKitMethodMap>['request'];

export type BtcKitResponses = ValueOf<BtcKitMethodMap>['response'];

export type BtcKitMethodNames = keyof BtcKitMethodMap;

type BtcKitRequest = {
  <T extends BtcKitMethodNames>(arg: T): Promise<BtcKitMethodMap[T]['response']>;
};

declare global {
  interface Window {
    btc?: {
      request: BtcKitRequest;
      listen(event: string): Promise<any>;
    };
  }
}

export {
  GetInfoRequest,
  GetInfoResponse,
  SignPsbtRequest,
  RequestAccountsRequest,
  RequestAccountsResponse,
};
