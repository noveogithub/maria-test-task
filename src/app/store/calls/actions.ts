import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Call } from '../../types';

export const LOAD_CALLS = '[Calls] Calls requested';
export const LOAD_CALLS_SUCCESS = '[Calls] Calls load success';
export const LOAD_CALLS_ERROR = '[Calls] Calls load error';
export const CLEAR_CALLS = '[Calls] Clear calls';

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

export type CallsActions = LoadCalls | LoadCallsSuccess | LoadCallsError | ClearCalls;
