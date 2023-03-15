import { ValueOf } from './utils';

import { DefineGetInfoMethod, GetInfoRequest, GetInfoResponse } from './methods/get-info';
import { DefineSignPsbtMethod, SignPsbtRequest } from './methods/sign-psbt';
import {
  DefineRequestAccountsMethod,
  RequestAccountsRequest,
  RequestAccountsResponse,
} from './methods/request-accounts';

export {
  GetInfoRequest,
  GetInfoResponse,
  SignPsbtRequest,
  RequestAccountsRequest,
  RequestAccountsResponse,
};

export type BtcKitMethodMap = DefineGetInfoMethod &
  DefineRequestAccountsMethod &
  DefineSignPsbtMethod;

export type BtcKitRequests = ValueOf<BtcKitMethodMap>['request'];

export type BtcKitResponses = ValueOf<BtcKitMethodMap>['response'];

export type BtcKitMethodNames = keyof BtcKitMethodMap;

declare global {
  interface Window {
    btc?: {
      request<T extends BtcKitMethodNames>(
        method: T,
        params?: Record<string, any>
      ): Promise<BtcKitMethodMap[T]['response']>;
    };
  }
}
