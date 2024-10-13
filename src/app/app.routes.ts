import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'search/:search',
    loadComponent: () =>
      import('./pages/search-result/search-result').then((c) => c.SearchResult),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/all-categories/all-categories.component').then(
        (c) => c.AllCategoriesComponent,
      ),
  },
  {
    path: 'advert/:advertId',
    loadComponent: () =>
      import('./pages/single-advert/single-advert.component').then(
        (c) => c.SingleAdvertComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(
        (c) => c.ProfileComponent,
      ),
    loadChildren: () =>
      import('./rotes/profile.routes').then((data) => data.ROUTES_PROFILES),
  },
  { path: '**', redirectTo: '/' },
];
