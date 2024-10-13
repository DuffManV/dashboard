import {
  Component,
  effect,
  input,
  InputSignal,
  signal,
  WritableSignal,
} from '@angular/core';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';
import IAdvertImage from '../../interfaces/IAdvertImage';
import { GalleriaModule } from 'primeng/galleria';
import { environment } from '../../../environments/environment';
import { ImageModule } from 'primeng/image';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  providers: [ImageService, ApiService],
  imports: [GalleriaModule, ImageModule],
  standalone: true,
})
export class GalleryComponent {
  public images: InputSignal<string[] | undefined> = input();
  public imagesData: IAdvertImage[] | undefined = [];
  public currentImage: WritableSignal<string | undefined | SafeUrl> = signal<
    string | undefined
  >(undefined);
  constructor(private imageService: ImageService) {
    effect(
      () => {
        this.imagesData = this.images()?.map((image: string) => {
          const itemImgSrc: string = this.imageService.getImage(image);
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
