import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import * as fromStore from '../store';

@Component({
  selector: 'noveo-header',
  template: `
    <noveo-header-dumb
      [authenticated]="authenticated$ | async"
      (logout)="onLogout()">
    </noveo-header-dumb>
  `,
})
export class HeaderContainerComponent {
  authenticated$: Observable<boolean>;

  constructor(
    private store: Store<fromStore.NoveoState>,
    private authService: AuthService,
  ) {
    this.authenticated$ = this.authService.getAuthenticated();
  }

  onLogout() {
    this.store.dispatch(new fromStore.Logout());
  }
}
