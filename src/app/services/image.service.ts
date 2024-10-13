import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';
import { ApiService } from './api.service';
import IAdvertImage from '../interfaces/IAdvertImage';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  constructor(private apiService: ApiService) {}

  public getImage(id: string | undefined): string {
    return `${environment.apiUrl}/images/${id}`;
  }

  public getImages(ids: string[] | undefined): Observable<IAdvertImage[]> {
    const images: IAdvertImage[] = [];
    if (ids && ids.length > 0) {
      ids.forEach((ids: string): void => {
        const imageSrc: string = this.getImage(ids);
        const imageData: IAdvertImage = {
          itemImgSrc: imageSrc,
          thumbnailImageSrc: imageSrc,
          alt: 'Картинка',
          title: 'Картинка объявления',
        };
        images.push(imageData);
      });
    } else {
      images.push({
        itemImgSrc: environment.photoPlaceholder,
        thumbnailImageSrc: environment.photoPlaceholder,
        alt: 'Нет изображения',
        title: 'Нет изображения',
      });
    }
    return of(images);
  }

  public createImage(
    advertId: string,
    content: string,
  ): Observable<ArrayBuffer> {
    return this.apiService.post(`${environment.apiUrl}/images`, {
      advertId,
      content,
    });
  }

  public deleteImage(id: string): Observable<IAdvertImage> {
    return this.apiService.delete(`${environment.apiUrl}/images/${id}`);
  }
}
