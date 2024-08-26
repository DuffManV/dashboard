import {Component} from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../ui/button/button.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonComponent,
    Button,
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  protected readonly searchIcon: string = "pi pi-search";
  protected readonly cssClass: string = "button-search";
  protected searchString: string = '';

  protected changeInput = (e: string): void => {
    console.log(e);
  }
  protected clickHandler = (e: Event): void => {
    console.log(e.target);
  }
 }
