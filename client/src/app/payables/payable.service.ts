// payables/payable.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payable } from '../models/payable.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PayableService {
  private apiUrl = environment.apiUrl + '/payable';

  constructor(private http: HttpClient) {}

  createPayable(payable: Payable): Observable<any> {
    return this.http.post(this.apiUrl, payable);
  }

  getPayables(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPayableById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePayable(id: string, payable: Payable): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, payable);
  }

  deletePayable(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
