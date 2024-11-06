import {Component} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {Button} from 'primeng/button';
import {Router} from '@angular/router';
import {ButtonComponent} from '../button/button.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonComponent, Button],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  protected readonly searchIcon: string = 'pi pi-search';
  protected readonly cssClass: string = 'button-search';
  public searchString: string = '';

  constructor(private router: Router) {
  }

  public clickHandler = (): void => {
    this.router.navigate(['search'], {
      queryParams: {
        advert: this.searchString.toLowerCase(),
        category: null
      }
    });
    this.searchString = '';
  };
  public changeInput = (): void => {
    console.log(this.searchString);
  };
}
