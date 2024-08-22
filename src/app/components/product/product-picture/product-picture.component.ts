import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-picture',
  standalone: true,
  imports: [],
  templateUrl: './product-picture.component.html',
  styleUrl: './product-picture.component.scss'
})
export class ProductPictureComponent {
  @Input() picture = '';
}
