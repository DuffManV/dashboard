import { Component, OnInit, Signal } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import productImage$ from '../../data/product-image';
import IProductImage from '../../interfaces/IProductImage';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
})
export class SingleProductComponent implements OnInit {
  public images: Signal<IProductImage[] | undefined> = toSignal(productImage$);
  public responsiveOptions:
    | { breakpoint: string; numVisible: number }[]
    | undefined;

  public ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5,
      },
      {
        breakpoint: '768px',
        numVisible: 3,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
      },
    ];
  }
}
