import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public searchString: string = '';

  public changeInput = (e: string): void => {
    console.log(e)
  }
}
