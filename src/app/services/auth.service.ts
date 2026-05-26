import { Register } from './../interfaces/register';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { MOCK_PROFILE } from './mock-data/mock-data';

// In-memory user store
let users: any[] = [
  { id: 1, first_name: 'Mostafa', last_name: 'Ahmed', email: 'user@example.com', password: 'password123', phone: '+20 100 000 0000', token: 'mock-token-abc123' }
];

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  login(obj: any): Observable<any> {
    const found = users.find(u => u.email === obj.email && u.password === obj.password);
    if (found) {
      return of({ status: 'Success', data: { ...found, token: found.token } });
    }
    return throwError(() => ({ error: { message: 'Invalid credentials' } }));
  }

  Register(obj: any): Observable<any> {
    const existing = users.find(u => u.email === obj.email);
    if (existing) {
      return throwError(() => ({ error: { message: 'Email already registered' } }));
    }
    const newUser = {
      id: users.length + 1,
      first_name: obj.first_name,
      last_name: obj.last_name,
      email: obj.email,
      phone: obj.phone,
      password: obj.password,
      token: 'mock-token-' + Math.random().toString(36).substr(2, 9)
    };
    users.push(newUser);
    return of({ status: 'Success', data: newUser });
  }

  profile(): Observable<any> {
    return of(MOCK_PROFILE);
  }

  value(value: any) {
    return value;
  }
}
