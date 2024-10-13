import { Component, effect, inject, input, InputSignal } from '@angular/core';
import { ImageService } from '../../services/image.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-single-advert',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './my-single-advert.component.html',
  styleUrl: './my-single-advert.component.scss',
  providers: [ImageService],
})
export class MySingleAdvertComponent {
  private imageService: ImageService = inject(ImageService);

  public advert: InputSignal<any> = input();
  public image: string = '';

  constructor() {
    effect(() => {
      console.log(this.advert().imagesIds);
      this.image = this.imageService.getImage(this.advert().imagesIds[0]);
    });
  }
}
