import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Auth } from '../../types';

export const LOGIN = '[App] Login request';
export const LOGIN_SUCCESS = '[App] Login success';
export const LOGIN_ERROR = '[App] Login error';
export const LOGOUT = '[App] Logout request';
export const LOGOUT_SUCCESS = '[App] Logout success';
export const LOGOUT_ERROR = '[App] Logout error';
export const SET_ERROR = '[App] Set error';
export const DISMISS_ERROR = '[App] Dismiss error';

export class Login implements Action {
  readonly type = LOGIN;
  constructor(public payload: { username: string, password: string }) { }
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;
  constructor(public payload: Auth) { }
}

export class LoginError implements Action {
  readonly type = LOGIN_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class Logout implements Action {
  readonly type = LOGOUT;
}
export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;
}

export class LogoutError implements Action {
  readonly type = LOGOUT_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class SetError implements Action {
  readonly type = SET_ERROR;
  constructor(public payload: HttpErrorResponse) { }
}

export class DismissError implements Action {
  readonly type = DISMISS_ERROR;
  constructor(public payload: string) { }
}

export type AppActions = Login
  | LoginSuccess
  | LoginError
  | Logout
  | LogoutSuccess
  | LogoutError
  | SetError
  | DismissError;
