import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpHeaders,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const authUser: string | null = localStorage.getItem('authUser');
  const headers: HttpHeaders = new HttpHeaders({
    Authorization: `Bearer ${authUser}`,
  });
  const newReq: HttpRequest<unknown> = req.clone({
    headers: headers,
  });
  return next(newReq).pipe(
    tap({
      next: (e: HttpEvent<unknown>) => {
        console.log(e);
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      },
    }),
  );
};
