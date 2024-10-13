import {
  HttpEvent,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const errorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const messageService: MessageService = inject(MessageService);
  return next(req).pipe(
    catchError((err) => {
      const errors = Object.values(err.error.errors).join(' ');
      console.log(errors);
      messageService.add({
        severity: 'warn',
        summary: 'Ошибка',
        detail: errors,
      });
      return throwError(() => err);
    }),
  );
};
