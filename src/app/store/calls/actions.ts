import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Call } from '../../types';

export const LOAD_CALLS = '[Calls] Calls requested';
export const LOAD_CALLS_SUCCESS = '[Calls] Calls load success';
export const LOAD_CALLS_ERROR = '[Calls] Calls load error';
export const CLEAR_CALLS = '[Calls] Clear calls';

// TODO: move out to a separate store in future
export const LOAD_CALL = '[Call] Call requested';
export const LOAD_CALL_SUCCESS = '[Call] Call load success';
export const LOAD_CALL_ERROR = '[Call] Call load error';
export const SAVE_CALL = '[Call] Save requested';
export const SAVE_CALL_SUCCESS = '[Call] Save load success';
export const SAVE_CALL_ERROR = '[Call] Save load error';
export const CLEAR_CALL = '[Call] Clear call';
export const SET_UNSAVED_CHANGES = '[Call] Unsaved changes';
export const SET_EDITABLE = '[Call] Editable';

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
  constructor(public payload: { error: HttpErrorResponse, id: string }) { }
}
export class SaveCall implements Action {
  readonly type = SAVE_CALL;
  constructor(public payload: Call) { }
}

export class SaveCallSuccess implements Action {
  readonly type = SAVE_CALL_SUCCESS;
  constructor(public payload: Call) { }
}

export class SaveCallError implements Action {
  readonly type = SAVE_CALL_ERROR;
  constructor(public payload: { error: HttpErrorResponse, id: string }) { }
}

export class ClearCall implements Action {
  readonly type = CLEAR_CALL;
  constructor(public payload: { id: string }) { }
}

export class SetUnsavedChanges implements Action {
  readonly type = SET_UNSAVED_CHANGES;
  constructor(public payload: boolean) { }
}

export class SetEditable implements Action {
  readonly type = SET_EDITABLE;
  constructor(public payload: boolean) { }
}

export type CallsActions = LoadCalls
  | LoadCallsSuccess
  | LoadCallsError
  | ClearCalls
  | LoadCall
  | LoadCallSuccess
  | LoadCallError
  | SaveCall
  | SaveCallSuccess
  | SaveCallError
  | ClearCall
  | SetUnsavedChanges
  | SetEditable;
