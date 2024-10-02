import {
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const token: string | null = localStorage.getItem('token');
  const headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${token}`,
  });
  const newReq: HttpRequest<unknown> = req.clone({
    headers: headers,
  });
  return next(newReq);
};
