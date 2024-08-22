import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SearchComponent} from "../components/search/search.component";
import {HeaderComponent} from "../components/header/header.component";
import {MainComponent} from "../components/main/main.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchComponent, HeaderComponent, MainComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.scss'
})
export class RootComponent {
  public title: string = 'project';
}
