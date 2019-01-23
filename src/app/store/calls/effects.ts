import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CallsService } from 'src/app/services/calls.service';
import * as fromCalls from './actions';

@Injectable()
export class CallsEffects {
  constructor(
    private actions$: Actions,
    private callsService: CallsService,
  ) { }

  @Effect()
  loadCalls$ = this.actions$.pipe(
    ofType<fromCalls.LoadCalls>(fromCalls.LOAD_CALLS),
    switchMap(() => {
      return this.callsService.loadCalls().pipe(
        map(calls => new fromCalls.LoadCallsSuccess(calls)),
        catchError(error => of(new fromCalls.LoadCallsError(error))),
      );
    }),
  );

  @Effect()
  loadCall$ = this.actions$.pipe(
    ofType<fromCalls.LoadCall>(fromCalls.LOAD_CALL),
    map(action => action.payload.id),
    switchMap(id => {
      return this.callsService.loadCall(id).pipe(
        map(call => new fromCalls.LoadCallSuccess(call)),
        catchError(error => of(new fromCalls.LoadCallError(error))),
      );
    }),
  );
}
