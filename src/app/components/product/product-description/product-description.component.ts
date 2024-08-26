import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.scss'
})
export class ProductDescriptionComponent {
  @Input() public name: string = '';
  @Input() public location: string = '';
  @Input() public price: string = '';
  @Input() public time: string = '';
}
