import { Component } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import IProduct from '../../interfaces/IProduct';
import { Observable, of } from 'rxjs';
import products$ from '../../data/products';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgForOf, ProductPreviewComponent, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent {
  public products$: Observable<IProduct[]> = products$;
}
