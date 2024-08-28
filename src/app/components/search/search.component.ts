import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [InputTextModule, FormsModule, ButtonComponent, Button],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @ViewChild('searchForm') form: any;
  protected readonly searchIcon: string = 'pi pi-search';
  protected readonly cssClass: string = 'button-search';
  public searchString: string = '';

  public onSubmit(): void {
    console.log(this.form.controls);
  }
  public changeInput = (): void => {
    console.log(JSON.stringify(this.form.controls));
  };
  public clickHandler = (e: Event): void => {
    console.log(this.searchString);
  };

  ngOnInit(): void {
    JSON.stringify(this.form.controls);
  }
}
