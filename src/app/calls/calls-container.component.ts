import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { Call } from '../types';

@Component({
  selector: 'noveo-calls',
  template: `
    <noveo-calls-component
      [calls]="calls$ | async"
      [loading]="loading$ | async"
    ></noveo-calls-component>
  `,
})
export class CallsContainerComponent implements OnInit {
  calls$: Observable<Call[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.State>) {
    this.calls$ = this.store.select(fromStore.getCalls);
    this.loading$ = this.store.select(fromStore.getCallsLoading);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCalls());
  }

}
