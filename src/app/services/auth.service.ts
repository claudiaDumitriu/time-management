import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}
  login(identifier: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((users) => {
        return (
          users.find(
            (user) =>
              (user.username === identifier || user.email === identifier) &&
              user.password === password
          ) || null
        );
      }),
      catchError((err) => {
        console.error('Eroare la login:', err);
        return of(null);
      })
    );
  }
}
