import { Component } from '@angular/core';
import {SearchComponent} from "../search/search.component";
import {ButtonComponent} from "../../ui/button/button.component";
import {LoginComponent} from "./login/login.component";
import {TitleComponent} from "./title/title.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchComponent,
    ButtonComponent,
    LoginComponent,
    TitleComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  newPostIcon = "pi pi-plus";
  title: string = "Доска объявлений";
}
