import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { mergeMap, take } from 'rxjs/operators';
import * as fromStore from '../store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromStore.State>) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.store.select(fromStore.getToken).pipe(
      take(1),
      mergeMap(token => next.handle(
        !!token
          ? req.clone({ setHeaders: { Authorization: token } })
          : req
      )),
    );
  }
}
