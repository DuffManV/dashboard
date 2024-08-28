import { Component, Input } from '@angular/core';
import IProduct from '../../interfaces/IProduct';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() public product: IProduct = {
    picture: '',
    name: '',
    price: '',
    location: '',
    time: '',
  };
}
