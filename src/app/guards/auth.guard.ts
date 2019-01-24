import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as fromStore from '../store';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private store: Store<fromStore.NoveoState>,
    private authService: AuthService,
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.getAuthenticated().pipe(
      take(1),
      tap((authenticated) => {
        if (!authenticated) {
          this.authService.logout();
          this.store.dispatch(new fromStore.Go({ path: ['/login'] }));
        }
      }));
  }
}
