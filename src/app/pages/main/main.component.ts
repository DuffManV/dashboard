import { Component, Signal } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import IProduct from '../../interfaces/IProduct';
import products$ from '../../data/products';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgForOf, ProductPreviewComponent, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public products: Signal<IProduct[] | undefined> = toSignal<
    IProduct[] | undefined
  >(products$);
}
