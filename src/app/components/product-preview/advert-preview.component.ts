import {
  Component,
  effect,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import IProduct from '../../interfaces/IProduct';
import { RouterLink } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-advert-preview',
  standalone: true,
  imports: [NgOptimizedImage, DatePipe, RouterLink],
  templateUrl: './advert-preview.component.html',
  styleUrl: './advert-preview.component.scss',
  providers: [ImageService, ApiService],
})
export class AdvertPreviewComponent implements OnInit {
  public advert: InputSignal<IProduct | undefined> = input<
    IProduct | undefined
  >();
  constructor(private imageService: ImageService) {
    effect(
      () => {
        if (this.advert()?.imagesIds[0] !== undefined) {
          this.image.set(
            this.imageService.getImage(this.advert()?.imagesIds[0]),
          );
        } else {
          this.image.set(environment.photoPlaceholder);
        }
      },
      { allowSignalWrites: true },
    );
  }

  public image: WritableSignal<string> = signal('');

  public ngOnInit(): void {
    console.log('product', this.advert()?.id);
  }
}
