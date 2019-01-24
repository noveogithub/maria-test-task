import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { Call } from '../types';

@Component({
  selector: 'noveo-calls',
  template: `
    <noveo-calls-dumb
      [calls]="calls$ | async"
      [dateParseFormat]="dateParseFormat$ | async"
      [loading]="loading$ | async"
    ></noveo-calls-dumb>
  `,
})
export class CallsContainerComponent implements OnInit, OnDestroy {
  calls$: Observable<Call[]>;
  dateParseFormat$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) {
    this.calls$ = this.store.select(fromStore.getCalls);
    this.dateParseFormat$ = this.store.select(fromStore.getDateParseFormat);
    this.loading$ = this.store.select(fromStore.getCallsLoadingAll);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCalls());
  }

  ngOnDestroy() {
    this.store.dispatch(new fromStore.ClearCalls());
  }
}
