import {
  ApplicationConfig,
  LOCALE_ID,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { registerLocaleData } from '@angular/common';
import localDataRu from '@angular/common/locales/ru';

registerLocaleData(localDataRu);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAnimations(),
    provideHttpClient(withInterceptors([authInterceptor, errorInterceptor])),
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    DialogService,
    MessageService,
  ],
};
