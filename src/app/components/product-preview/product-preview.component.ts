import {
  ChangeDetectionStrategy,
  Component,
  input,
  InputSignal,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import IProduct from '../../interfaces/IProduct';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-preview',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe],
  templateUrl: './product-preview.component.html',
  styleUrl: './product-preview.component.scss',
  providers: [ImageService, ApiService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductPreviewComponent implements OnInit, OnDestroy {
  public product: InputSignal<IProduct | undefined> = input<
    IProduct | undefined
  >();
  public image: unknown = undefined;
  public imageServiceSubscription: Subscription | null = null;
  constructor(private imageService: ImageService) {}

  public ngOnInit(): void {
    console.warn('!!!!!', this.product());
    this.imageServiceSubscription = this.imageService
      .getImage(this.product()?.imagesIds[0])
      .subscribe((image: unknown) => {
        this.image = image;
      });
  }

  ngOnDestroy(): void {
    this.imageServiceSubscription?.unsubscribe();
  }
}
