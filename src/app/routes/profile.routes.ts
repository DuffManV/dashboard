import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/profile/profile.component').then(
        (c) => c.ProfileComponent,
      ),
    children: [
      {
        path: 'create-advert',
        loadComponent: () =>
          import('../pages/create-advert/create-advert.component').then(
            (c) => c.CreateAdvertComponent,
          ),
      },
    ],
  },
];
