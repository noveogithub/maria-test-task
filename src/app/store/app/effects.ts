import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
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
  login$ = this.actions$.pipe(
    ofType<fromApp.Login>(fromApp.LOGIN),
    map(action => action.payload),
    switchMap(({ username, password }) => {
      return this.authService.authenticate(username, password).pipe(
        tap((auth) => AuthService.login(auth)),
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
}
