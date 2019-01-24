import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
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
      [saving]="saving$ | async"
      [editable]="editable$ | async"
      [unsavedChanges]="unsavedChanges$ | async"
      (save)="onSave($event)"
      (setUnsavedChanges)="onSetUnsavedChanges($event)"
      (setEditable)="onSetEditable($event)"
    ></noveo-call-profile-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CallProfileContainerComponent implements OnInit, OnDestroy {
  call$: Observable<Call>;
  dateParseFormat$: Observable<string>;
  loading$: Observable<boolean>;
  saving$: Observable<boolean>;
  unsavedChanges$: Observable<boolean>;
  editable$: Observable<boolean>;

  get callId(): string {
    return this.route.snapshot.params.callId;
  }

  constructor(
    private route: ActivatedRoute,
    private store: Store<fromStore.NoveoState>,
  ) {
    this.call$ = this.store.select(fromStore.getCall, { id: this.callId });
    this.dateParseFormat$ = this.store.select(fromStore.getDateParseFormat);
    this.loading$ = this.store.select(fromStore.getCallLoading, { id: this.callId });
    this.saving$ = this.store.select(fromStore.getCallSaving, { id: this.callId });
    this.unsavedChanges$ = this.store.select(fromStore.getUnsavedChanges);
    this.editable$ = this.store.select(fromStore.getEditable);
  }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadCall({ id: this.callId }));
  }

  ngOnDestroy() {
    this.store.dispatch(new fromStore.ClearCall({ id: this.callId }));
  }

  onSave(call: Call) {
    this.store.dispatch(new fromStore.SaveCall(call));
  }

  onSetUnsavedChanges(changes: boolean) {
    this.store.dispatch(new fromStore.SetUnsavedChanges(changes));
  }

  onSetEditable(changes: boolean) {
    this.store.dispatch(new fromStore.SetEditable(changes));
  }
}
