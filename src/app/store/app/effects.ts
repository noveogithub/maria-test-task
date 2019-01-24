import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, take, tap } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Go } from '../router';
import * as fromApp from './actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) { }

  @Effect()
  $initial = of(null).pipe(
    switchMap(() => this.authService.getAuth()),
    take(1),
    map(auth => new fromApp.LoginSuccess(auth)),
  );

  @Effect()
  login$ = this.actions$.pipe(
    ofType<fromApp.Login>(fromApp.LOGIN),
    map(action => action.payload),
    switchMap(({ username, password }) => {
      return this.authService.authenticate(username, password).pipe(
        tap((auth) => this.authService.login(auth)),
        map((auth) => new fromApp.LoginSuccess(auth)),
        catchError(error => of(new fromApp.LoginError(error))),
      );
    }),
  );

  @Effect()
  redirectOnLogin$ = this.actions$.pipe(
    ofType<fromApp.LoginSuccess>(fromApp.LOGIN_SUCCESS),
    map(() => new Go({ path: ['calls'] })),
  );

  @Effect()
  logout$ = this.actions$.pipe(
    ofType<fromApp.Logout>(fromApp.LOGOUT),
    tap(() => this.authService.logout()),
    map(() => new Go({ path: ['/login'] })),
  );

  @Effect()
  setError$ = this.actions$.pipe(
    ofType<fromApp.LoginError>(fromApp.LOGIN_ERROR),
    map(action => new fromApp.SetError(action.payload)),
  );

  @Effect()
  errorRedirect$ = this.actions$.pipe(
    ofType<fromApp.SetError>(fromApp.SET_ERROR),
    map(action => action.payload),
    filter(error => error.status === 401),
    map(() => new Go({ path: ['/login'] })),
  );
}
