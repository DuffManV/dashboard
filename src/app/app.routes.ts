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
    path: 'product/:productId',
    loadComponent: () =>
      import('./pages/single-product/single-product.component').then(
        (c) => c.SingleProductComponent,
      ),
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./pages/profile/profile.component').then(
        (c) => c.ProfileComponent,
      ),
    // loadChildren: () => import('./routes/profile.routes').then((r) => r.routes),
  },
  {
    path: 'profile/create-advert',
    loadComponent: () =>
      import('./pages/create-advert/create-advert.component').then(
        (c) => c.CreateAdvertComponent,
      ),
  },
  {
    path: 'profile/my-adverts',
    loadComponent: () =>
      import('./pages/my-advertisement/my-advertisement.component').then(
        (c) => c.MyAdvertisementComponent,
      ),
  },
  { path: '**', redirectTo: '/' },
];
