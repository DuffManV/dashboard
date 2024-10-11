import {
  Component,
  effect,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';
import IProductImage from '../../interfaces/IProductImage';
import { GalleriaModule } from 'primeng/galleria';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [ImageService, ApiService],
  imports: [GalleriaModule],
  standalone: true,
})
export class GalleryComponent {
  public images: InputSignal<string[] | undefined> = input();
  public imagesData: IProductImage[] | undefined = [];
  public currentImage: WritableSignal<string | null> = signal<string | null>(
    null,
  );
  constructor(private imageService: ImageService) {
    effect(
      () => {
        this.imagesData = this.images()?.map((image) => {
          const itemImgSrc = this.imageService.getImage(image);
          return {
            itemImgSrc: itemImgSrc,
            thumbnailImageSrc: itemImgSrc,
            title: 'Изображение',
            alt: 'Изображение',
          };
        });
        if (this.imagesData && this.imagesData.length > 0) {
          this.currentImage.set(this.imagesData[0].itemImgSrc);
        } else {
          this.currentImage.set(environment.photoPlaceholder);
        }
      },
      { allowSignalWrites: true },
    );
  }
  public selectImage(image: string) {
    this.currentImage.set(image);
  }
}
