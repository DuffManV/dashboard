import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  @Input() name: string = '';
  @Input() description: string = '';
  @Input() price: string = '';
  @Input() time: string = '';
}
