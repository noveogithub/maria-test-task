import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Auth } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _key: 'currentUser';
  private _subscription: Subscription = new Subscription();
  private _auth$: BehaviorSubject<Auth> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<Auth>(`${environment.apiUrl}/api/Users/login`, { username, password });
  }

  logout() {
    return this.http.post<Auth>(`${environment.apiUrl}/api/Users/logout`, {});
  }

  saveAuth(auth: Auth): void {
    localStorage.setItem(this._key, JSON.stringify(auth));
    this._auth$.next(auth);
  }

  removeAuth(): void {
    localStorage.removeItem(this._key);
    this._auth$.next(null);
  }

  getAuth(): Observable<Auth> {
    this._checkAuth();
    return this._auth$.asObservable();
  }

  getToken(): Observable<string> {
    this._checkAuth();
    return this._auth$.asObservable().pipe(
      map(auth => this._getAuthToken(auth)),
      distinctUntilChanged(),
    );
  }

  getAuthenticated(): Observable<boolean> {
    this._checkAuth();
    return this._auth$.asObservable().pipe(
      map(auth => this._isAuthenticated(auth)),
      distinctUntilChanged(),
    )
  }

  private _getAuth(): Auth {
    const auth = JSON.parse(localStorage.getItem(this._key))
    return auth;
  }

  private _checkAuth(): void {
    const auth = this._getAuth();
    this._auth$.next(auth);
  }

  private _getAuthToken(auth: Auth): string {
    return auth ? auth.id : null;
  }

  private _isAuthenticated(auth: Auth): boolean {
    const token = auth ? auth.id : null;
    return !!token;
  }
}
