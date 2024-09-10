import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ButtonComponent } from '../button/button.component';
import { LoginComponent } from '../login/login.component';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-up',
  standalone: true,
  imports: [
    SearchComponent,
    ButtonComponent,
    LoginComponent,
    Button,
    RouterLink,
  ],
  templateUrl: './header-up.component.html',
  styleUrl: './header-up.component.scss',
})
export class HeaderUpComponent {
  public newPostIcon: string = 'pi pi-plus';
  public postButtonCss: string = 'button-post';
  public mainTitle: string = 'Барахолка';
  public newPostTitle: string = 'Новое объявление';
}
