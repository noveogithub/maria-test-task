import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';
import { Call } from '../types';

@Component({
  selector: 'noveo-call-profile',
  template: `
    <noveo-call-profile-dumb
      [call]="call$ | async"
      [dateParseFormat]="dateParseFormat$ | async"
      [loading]="loading$ | async"
    ></noveo-call-profile-dumb>
  `,
})
export class CallProfileContainerComponent implements OnInit, OnDestroy {
  call$: Observable<Call>;
  dateParseFormat$: Observable<string>;
  loading$: Observable<boolean>;

  get callId(): string {
    return this.route.snapshot.params.callId;
  }

  constructor(private route: ActivatedRoute, private store: Store<fromStore.State>) {
    this.call$ = this.store.select(fromStore.getCall, { id: this.callId });
    this.dateParseFormat$ = this.store.select(fromStore.getDateParseFormat);
    this.loading$ = this.store.select(fromStore.getCallLoading, { id: this.callId });
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCall({ id: this.callId }));
  }

  ngOnDestroy() {
    this.store.dispatch(new fromStore.ClearCall({ id: this.callId }));
  }

}
