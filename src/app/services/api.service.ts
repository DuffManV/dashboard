import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public get(url: string, options?: any): Observable<ArrayBuffer> {
    return this.http.get(url, options);
  }

  public post(url: string, data: any, options?: any): Observable<ArrayBuffer> {
    return this.http.post(url, data, options);
  }

  public put(url: string, data: any, options?: any): Observable<ArrayBuffer> {
    return this.http.put(url, data, options);
  }

  public delete(url: string, options?: any): Observable<ArrayBuffer> {
    return this.http.delete(url, options);
  }
}
