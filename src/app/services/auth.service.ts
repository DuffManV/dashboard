import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private apiService: ApiService,
    private router: Router,
  ) {}

  public isLoggedIn: boolean = false;

  public register(
    login: string | undefined,
    name: string | undefined,
    password: string | undefined,
  ): Observable<string> {
    return this.apiService
      .post<string>(`${environment.apiUrl}/auth/register`, {
        login,
        name,
        password,
      })
      .pipe(
        tap((data: string) => console.log(data)),
        catchError((err) => {
          return throwError(() => err.message);
        }),
      );
  }

  public login(phone: string, password: string): Observable<string> {
    return this.apiService
      .post<string>(`${environment.apiUrl}/auth/login`, {
        login: phone,
        password,
      })
      .pipe(
        tap((data: string): void => {
          this.isLoggedIn = true;
          localStorage.setItem(
            'token',
            JSON.stringify(data).replaceAll('"', ''),
          );
        }),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
