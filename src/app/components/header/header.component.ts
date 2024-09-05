import { Component } from '@angular/core';
import { HeaderUpComponent } from '../header-up/header-up.component';
import { HeaderDownComponent } from '../header-down/header-down.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderUpComponent, HeaderDownComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
