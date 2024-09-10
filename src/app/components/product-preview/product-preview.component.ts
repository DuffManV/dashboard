import { Component, input, InputSignal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import IProduct from '../../interfaces/IProduct';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
})
export class ProductPreviewComponent {
  product: InputSignal<IProduct | undefined> = input<IProduct>();
}
