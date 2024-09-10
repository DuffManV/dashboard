import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { SearchResult } from './pages/search-result/search-result';

export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'search/:search', component: SearchResult },
  { path: '**', redirectTo: '/' },
];
