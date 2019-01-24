import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store';

@Component({
  selector: 'noveo-login',
  template: `
    <noveo-login-dumb
      [loading]="loading$ | async"
      (submitted)="onSubmit($event)">
    </noveo-login-dumb>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginContainerComponent {

  loading$: Observable<boolean>;

  constructor(private store: Store<fromStore.NoveoState>) {
    this.loading$ = this.store.select(fromStore.getAuthLoading);
  }

  onSubmit({ username, password }: { username: string, password: string }) {
    this.store.dispatch(new fromStore.Login({ username, password }));
  }
}
