import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Auth } from '../types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static key: 'currentUser';

  constructor(private http: HttpClient) { }

  authenticate(username: string, password: string) {
    return this.http.post<Auth>(`${environment.apiUrl}/api/Users/login`, { username, password });
  }

  static login(auth: Auth): void {
    localStorage.setItem(AuthService.key, JSON.stringify(auth));
  }

  static logout(): void {
    localStorage.removeItem(AuthService.key);
  }

  static getUser(): Auth {
    return JSON.parse(localStorage.getItem(AuthService.key))
  }
}
