import { Component, effect, inject, input, InputSignal } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AdvertService } from '../../services/advert.service';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-user-single-advert',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './user-single-advert.component.html',
  styleUrl: './user-single-advert.component.scss',
  providers: [ImageService, ApiService, AdvertService],
})
export class UserSingleAdvertComponent {
  private imageService: ImageService = inject(ImageService);
  private advertService: AdvertService = inject(AdvertService);

  public advert: InputSignal<any | undefined> = input();
  public image: string = '';

  constructor() {
    effect(() => {
      this.image = this.imageService.getImage(
        this.advert && this.advert().imagesIds[0],
      );
    });
  }

  public deleteAdv(): void {
    if (confirm('Удалить это объявление?')) {
      this.advertService
        .deleteAdvert(this.advert().id)
        .subscribe((res) => console.log(res));
      console.log('deleted');
    } else return;
  }
}
