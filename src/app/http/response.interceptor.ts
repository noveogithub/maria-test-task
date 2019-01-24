import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import * as fromStore from '../store';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<fromStore.NoveoState>,
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    {
      return next.handle(req).pipe(
        catchError((response) => {

          if (response instanceof HttpErrorResponse && response.status === 401) {
            this.authService.removeAuth();
            this.store.dispatch(new fromStore.Go({ path: ['/login'] }));
          }

          throw response;
        }),
      );
    }
  }
}

