import { Component, Signal } from '@angular/core';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import IProduct from '../../interfaces/IProduct';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-my-advertisement',
  standalone: true,
  imports: [ProductPreviewComponent],
  templateUrl: './my-advertisement.component.html',
  styleUrl: './my-advertisement.component.scss',
})
export class MyAdvertisementComponent {
  // public products: Signal<IProduct[] | undefined> = toSignal<
  //   IProduct[] | undefined
  // >(products$);
}
