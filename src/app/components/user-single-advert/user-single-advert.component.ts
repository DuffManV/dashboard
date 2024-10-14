import { Component, effect, inject, input, InputSignal } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-single-advert',
  standalone: true,
  imports: [RouterLink, DatePipe],
  templateUrl: './user-single-advert.component.html',
  styleUrl: './user-single-advert.component.scss',
  providers: [ImageService],
})
export class UserSingleAdvertComponent {
  private imageService: ImageService = inject(ImageService);

  public advert: InputSignal<any | undefined> = input();
  public image: string = '';

  constructor() {
    effect(() => {
      this.image = this.imageService.getImage(
        this.advert && this.advert().imagesIds[0],
      );
    });
  }
}
