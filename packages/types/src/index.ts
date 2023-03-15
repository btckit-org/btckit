// See JSON RPC specification
// https://www.jsonrpc.org/specification

type RpcParameterByPosition = string[];
type RpcParameterByName = Record<string, string>;

type RpcParameter = RpcParameterByPosition | RpcParameterByName;
interface RpcBaseProps {
  jsonrpc: '2.0';
  id: string;
}

export interface RpcRequest<TMethod, TParam = RpcParameter> extends RpcBaseProps {
  method: TMethod;
  params?: TParam;
}

export interface RpcError<TErrorData = RpcParameter> {
  code: number | RpcErrorCode;
  message: string;
  data?: TErrorData;
}

export interface RpcSuccessResponse<TResult extends Record<string, unknown>> extends RpcBaseProps {
  result: TResult;
}

export interface RpcErrorResponse<TError extends RpcError = RpcError> extends RpcBaseProps {
  error: TError;
}

export type RpcResponse<
  TResult extends Record<string, unknown>,
  TError extends RpcError = RpcError
> = RpcSuccessResponse<TResult> | RpcErrorResponse<TError>;

export enum RpcErrorCode {
  // Spec defined server errors
  PARSE_ERROR = -32700,
  INVALID_REQUEST = -32600,
  METHOD_NOT_FOUND = -32601,
  INVALID_PARAMS = -32602,
  INTERNAL_ERROR = -32603,
  SERVER_ERROR = -32000,
  // Client defined errors
  USER_REJECTION = 4001,
}
