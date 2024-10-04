import {
  Component,
  input,
  InputSignal,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import IProductImage from '../../interfaces/IProductImage';
import { ImageService } from '../../services/image.service';
import { ApiService } from '../../services/api.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
  providers: [ImageService, ApiService],
  imports: [JsonPipe],
})
export class ImageCardComponent implements OnInit {
  public currentImage: WritableSignal<IProductImage | null> =
    signal<IProductImage | null>(null);
  public images: InputSignal<IProductImage[] | null | undefined> = input();

  ngOnInit(): void {
    const images = this.images();
    console.log(this.images());
    if (images && images.length > 0) {
      this.currentImage.set(images[0]);
    }
  }
}
