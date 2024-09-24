import { Injectable, Signal } from '@angular/core';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from './user.service';

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
  ): Observable<ArrayBuffer> {
    return this.apiService
      .post(`${environment.apiUrl}/auth/register`, { login, name, password })
      .pipe(
        tap((data: ArrayBuffer) => console.log(data)),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  public login(phone: string, password: string): Observable<ArrayBuffer> {
    return this.apiService
      .post(`${environment.apiUrl}/auth/login`, {
        login: phone,
        password,
      })
      .pipe(
        tap((data: ArrayBuffer): void => {
          this.isLoggedIn = true;
          localStorage.setItem(
            'authUser',
            JSON.stringify(data).replaceAll('"', ''),
          );
        }),
        catchError((err) => {
          return throwError(() => err);
        }),
      );
  }

  public logout(): void {
    localStorage.removeItem('authUser');
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }
}
