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
  public searchIcon: string = "pi pi-search";
  public cssClass: string = "button-search";
  public searchString: string = '';

  public changeInput = (e: string): void => {
    console.log(e);
  }
  public clickHandler = (e: Event): void => {
    console.log(e.target);
  }
 }
