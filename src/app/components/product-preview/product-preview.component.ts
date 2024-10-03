import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnInit,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import IProduct from '../../interfaces/IProduct';
import { RouterLink } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, RouterLink],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ImageService, ApiService],
})
export class ProductPreviewComponent implements OnInit {
  constructor(private imageService: ImageService) {}
  public product: InputSignal<IProduct | undefined> = input<
    IProduct | undefined
  >();
  public image: string | undefined = undefined;

  public ngOnInit(): void {
    if (this.product()?.imagesIds[0] !== undefined) {
      this.image = this.imageService.getImage(this.product()?.imagesIds[0]);
      // this.image = `api/images/${this.product()?.imagesIds[0]}`;
    } else {
      this.image = '/images/no_photo.webp';
    }
  }
}
