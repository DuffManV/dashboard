import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../product/product.component";
import IProduct from "../../interfaces/IProduct";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    ProductComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public products: Array<IProduct>= [
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },
    {
      picture: '1',
      name: '2',
      description: '3'
    },

  ]

}
