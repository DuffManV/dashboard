import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { HeaderUpComponent } from '../header-up/header-up.component';
import { MainComponent } from '../../pages/main/main.component';
import { AllAdvertisementsComponent } from '../../pages/all-advertisements/all-advertisements.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SearchComponent,
    HeaderUpComponent,
    MainComponent,
    AllAdvertisementsComponent,
    HeaderComponent,
  ],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss',
})
export class RootComponent {}
