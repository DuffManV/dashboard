import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-header-down',
  standalone: true,
  imports: [Button, SearchComponent],
  templateUrl: './header-down.component.html',
  styleUrl: './header-down.component.scss',
})
export class HeaderDownComponent {
  public title: string = 'Доска объявлений';
}
