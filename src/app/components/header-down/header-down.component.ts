import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SearchComponent } from '../search/search.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-down',
  standalone: true,
  imports: [Button, SearchComponent, RouterLink],
  templateUrl: './header-down.component.html',
  styleUrl: './header-down.component.scss',
})
export class HeaderDownComponent {
  public title: string = 'Доска объявлений';
  public allCategoriesText: string = 'Все категории';
}
