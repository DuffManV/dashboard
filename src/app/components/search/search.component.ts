import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../button/button.component';
import { Button } from 'primeng/button';
import { ActivatedRoute, provideRouter, Router } from '@angular/router';
import * as test from 'node:test';
import { serveWebpackBrowser } from '@angular-devkit/build-angular/src/builders/dev-server/webpack-server';

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
    this.router.navigate(['search/', this.searchString]);
  }
  public changeInput = (): void => {
    console.log(this.searchString);
  };

  constructor(private router: Router) {}
  public clickHandler = (): void => {
    this.router.navigate(['search/', this.searchString]);
  };
}
