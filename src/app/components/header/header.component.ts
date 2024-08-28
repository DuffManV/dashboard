import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../button/button.component';
import { LoginComponent } from '../login/login.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SearchComponent, ButtonComponent, LoginComponent, Button],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public newPostIcon: string = 'pi pi-plus';
  public title: string = 'Доска объявлений';
  public postButtonCss: string = 'button-post';
}
