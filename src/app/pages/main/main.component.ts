import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {ProductComponent} from "../../components/product/product.component";
import IProduct from "../../interfaces/IProduct";
import {BreadcrumbsComponent} from "../../components/breadscrumbs/breadcrumbs.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    NgForOf,
    ProductComponent,
    BreadcrumbsComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public products: Array<IProduct> = [
    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },
    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },    {
      picture: '../images/notebook.jpg',
      name: 'Название',
      price: '300',
      location: 'Адрес',
      time: 'Сегодня в 15-30',
    },
  ]
}
