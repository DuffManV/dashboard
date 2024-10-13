import {
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const url: string = environment.dadataUrl;
  const dadataHeaders = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: 'Token ' + environment.dadataToken,
  };
  if (req.url.search(url) === 0) {
    req = req.clone({
      setHeaders: dadataHeaders,
    });
    return next(req);
  }
  const token: string | null = localStorage.getItem('token');
  const headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  const newReq: HttpRequest<unknown> = req.clone({
    headers: headers,
  });
  return next(newReq);
};
