import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> => {
  const messageService: MessageService = inject(MessageService);
  return next(req).pipe(
    catchError((err) => {
      console.log(err);
      messageService.add({
        severity: 'error',
        summary: 'Ошибка',
        detail: err?.error?.error.message,
      });
      return throwError(() => err);
    }),
  );
};
