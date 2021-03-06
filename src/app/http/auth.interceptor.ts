import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.getToken().pipe(
      take(1),
      mergeMap(token => next.handle(
        !!token && req.url.indexOf(environment.apiUrl) >= 0
          ? req.clone({ setHeaders: { Authorization: token } })
          : req
      )),
    );
  }
}
