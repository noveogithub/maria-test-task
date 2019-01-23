import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Auth } from '../../types';

export const LOGIN = '[App] Login request';
export const LOGIN_SUCCESS = '[App] Login success';
export const LOGIN_ERROR = '[App] Login error';
export const LOGOUT = '[App] Logout request';

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

export type AppActions = Login | LoginSuccess | LoginError;
