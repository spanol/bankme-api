// assignors/assignor.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Assignor } from '../models/assignor.model';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AssignorService {
  private apiUrl = environment.apiUrl + '/assignor';

  constructor(private http: HttpClient) {}

  createAssignor(assignor: Assignor): Observable<any> {
    return this.http.post(this.apiUrl, assignor);
  }

  getAssignors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getAssignorById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateAssignor(id: string, assignor: Assignor): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, assignor);
  }

  deleteAssignor(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
