import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import IUser from '../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}

  public getUsers(): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/users`);
  }

  public getUser(id: string): Observable<ArrayBuffer> {
    return this.apiService.get(`${environment.apiUrl}/users/${id}`);
  }

  public getCurrentUser(): Observable<IUser> {
    return this.apiService.get(`${environment.apiUrl}/users/current`);
  }

  public updateUser(
    id: string,
    name: string,
    login: string,
    password: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.put(`${environment.apiUrl}/users/${id}`, {
      name,
      login,
      password,
    });
  }

  public deleteUser(id: string): Observable<ArrayBuffer> {
    return this.apiService.delete(`${environment.apiUrl}/users/${id}`);
  }
}
