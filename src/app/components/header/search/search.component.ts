import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "../../../ui/button/button.component";
import {InputComponent} from "../../../ui/input/input.component";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    InputTextModule,
    FormsModule,
    ButtonComponent,
    InputComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
 searchIcon: string = "pi pi-search";
 cssClass: string = "button-search";
}
