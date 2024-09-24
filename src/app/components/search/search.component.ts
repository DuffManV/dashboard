import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Button } from 'primeng/button';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonComponent, Button],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnDestroy {
  protected readonly searchIcon: string = 'pi pi-search';
  protected readonly cssClass: string = 'button-search';
  public searchString: string = '';
  public result: string = '';

  constructor(
    private router: Router,
    private http: HttpClient,
  ) {}
  public search(): Subscription | undefined {
    if (this.searchString) {
      return this.http
        .post(`${environment.apiUrl}/advert/search`, {
          search: this.searchString,
          showNonActive: true,
        })
        .subscribe((data: any): void => {
          this.result = data;
          console.log(data);
        });
    }
    return undefined;
  }
  public clickHandler = (): void => {
    this.search();
    this.router.navigate(['search', this.searchString]);
    this.searchString = '';
  };
  public changeInput = (): void => {
    console.log(this.searchString);
  };

  ngOnDestroy(): void {
    this.search()?.unsubscribe();
  }
}
