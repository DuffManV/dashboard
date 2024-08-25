import { Component } from '@angular/core';
import {SearchComponent} from "./search/search.component";
import {ButtonComponent} from "../../ui/button/button.component";
import {LoginComponent} from "./login/login.component";
import {TitleComponent} from "./title/title.component";
import {Button} from "primeng/button";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SearchComponent,
    ButtonComponent,
    LoginComponent,
    TitleComponent,
    Button
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  newPostIcon: string = "pi pi-plus";
  title: string = "Доска объявлений";
  postButtonCss: string = "button-post"
}
