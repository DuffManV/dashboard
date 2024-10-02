import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import IPostOptions from '../interfaces/IPostOptions';
import IPutOptions from '../interfaces/IPutOptions';
import IGetOptions from '../interfaces/IGetOptions';
import IDeleteOptions from '../interfaces/IDeleteOptions';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string): Observable<T>;
  public get<T>(url: string, options?: IGetOptions): Observable<T> {
    const opt: IGetOptions = Object.assign({}, options ? options : {});
    return this.http.get<T>(url, opt);
  }

  public post<T>(url: string, data: any): Observable<T>;
  public post<T>(
    url: string,
    data: any,
    options?: IPostOptions,
  ): Observable<T> {
    const opt: IPostOptions = Object.assign({}, options ? options : {});
    return this.http.post<T>(url, data, opt);
  }

  public put<T>(url: string, data: any): Observable<T>;
  public put<T>(url: string, data: any, options?: IPutOptions): Observable<T> {
    const opt: IPostOptions = Object.assign({}, options ? options : {});
    return this.http.put<T>(url, data, opt);
  }

  public delete<T>(url: string): Observable<T>;
  public delete<T>(url: string, options?: IDeleteOptions): Observable<T> {
    const opt: IDeleteOptions = Object.assign({}, options ? options : {});
    return this.http.delete<T>(url, opt);
  }
}
