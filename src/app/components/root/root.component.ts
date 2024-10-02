import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { HeaderUpComponent } from '../header-up/header-up.component';
import { MainComponent } from '../../pages/main/main.component';
import { SearchResult } from '../../pages/search-result/search-result';
import { HeaderComponent } from '../header/header.component';
import { SingleProductComponent } from '../../pages/single-product/single-product.component';
import { ProfileComponent } from '../../pages/profile/profile.component';
import { CreateAdvertComponent } from '../../pages/create-advert/create-advert.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    HeaderUpComponent,
    MainComponent,
    SearchResult,
    HeaderComponent,
    SingleProductComponent,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
