import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SearchResult } from './pages/search-result/search-result';
import { AllCategoriesComponent } from './pages/all-categories/all-categories.component';
import { SingleProductComponent } from './pages/single-product/single-product.component';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search/:search', component: SearchResult },
  {
    path: 'categories',
    component: AllCategoriesComponent,
  },
  { path: 'product', component: SingleProductComponent },
  { path: '**', redirectTo: '/' },
];
