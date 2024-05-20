// auth/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = environment.apiUrl + '/auth';

  constructor(private http: HttpClient) {}

  login({ login, password }: any): Observable<any> {
    return this.http.post(this.apiUrl, { login, password });
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token));
  }

  getUsername(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const { username } = JSON.parse(token);
      return username;
    } catch (error) {
      return null;
    }
  }

  getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      const { sub } = JSON.parse(token);
      return sub;
    } catch (error) {
      return null;
    }
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    if (!token) return null;

    try {
      return JSON.parse(token);
    } catch (error) {
      return null;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }
}
