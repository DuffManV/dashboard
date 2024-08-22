import {Component, Input} from '@angular/core';
import IProduct from "../../interfaces/IProduct";
import {ProductDescriptionComponent} from "./product-description/product-description.component";
import {ProductPictureComponent} from "./product-picture/product-picture.component";

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ProductDescriptionComponent,
    ProductPictureComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: IProduct = {name: '', picture: '', description: ''};
}
