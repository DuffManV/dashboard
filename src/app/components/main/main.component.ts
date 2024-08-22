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
  protected products: Array<IProduct>= [
    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },    {
      name: '1',
      image: '2',
      desc: '3'
    },

  ]

}
