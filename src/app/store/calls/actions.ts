import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Call } from '../../types';

export const LOAD_CALLS = '[Calls] Calls requested';
export const LOAD_CALLS_SUCCESS = '[Calls] Calls load success';
export const LOAD_CALLS_ERROR = '[Calls] Calls load error';
export const CLEAR_CALLS = '[Calls] Clear calls';
export const LOAD_CALL = '[Call] Call requested';
export const LOAD_CALL_SUCCESS = '[Call] Call load success';
export const LOAD_CALL_ERROR = '[Call] Call load error';
export const CLEAR_CALL = '[Call] Clear call';

export class LoadCalls implements Action {
  readonly type = LOAD_CALLS;
}

export class LoadCallsSuccess implements Action {
  readonly type = LOAD_CALLS_SUCCESS;
  constructor(public payload: Call[]) { }
}

export class LoadCallsError implements Action {
  readonly type = LOAD_CALLS_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class ClearCalls implements Action {
  readonly type = CLEAR_CALLS;
}
export class LoadCall implements Action {
  readonly type = LOAD_CALL;
  constructor(public payload: { id: string }) { }
}

export class LoadCallSuccess implements Action {
  readonly type = LOAD_CALL_SUCCESS;
  constructor(public payload: Call) { }
}

export class LoadCallError implements Action {
  readonly type = LOAD_CALL_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class ClearCall implements Action {
  readonly type = CLEAR_CALLS;
}

export type CallsActions = LoadCalls
  | LoadCallsSuccess
  | LoadCallsError
  | ClearCalls
  | LoadCall
  | LoadCallSuccess
  | LoadCallError
  | ClearCall;
