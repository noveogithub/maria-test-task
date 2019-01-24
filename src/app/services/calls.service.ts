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

  loadCall(id: string) {
    return this.http.get<Call>(`${environment.apiUrl}/api/calls/${id}`);
  }

  saveCall(call: Call) {
    return this.http.put<Call>(`${environment.apiUrl}/api/calls/${call.id}`, call);
  }

}
