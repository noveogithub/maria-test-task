import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Call } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CallsService {

  constructor(private http: HttpClient) { }

  loadCalls() {
    return this.http.get<Call[]>(`${environment.apiUrl}/api/calls`);
  }

  loadCall(id: number) {
    return this.http.get(`${environment.apiUrl}/api/calls/${id}`);
  }

}
