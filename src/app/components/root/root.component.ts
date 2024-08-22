import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "../search/search.component";
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, HeaderComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  title = 'project';
}
