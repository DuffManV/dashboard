import {Component, Input} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-product-picture',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './product-picture.component.html',
  styleUrl: './product-picture.component.scss'
})
export class ProductPictureComponent {
  @Input() public picture: string = '';
}
