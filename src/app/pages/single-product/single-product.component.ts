import { Component, OnDestroy, OnInit, signal, Signal } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';
import IProduct from '../../interfaces/IProduct';
import { ImageService } from '../../services/image.service';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [GalleriaModule, GalleryComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
  providers: [AdvertService, ApiService, ImageService],
})
export class SingleProductComponent implements OnInit, OnDestroy {
  constructor(
    private activatedRoute: ActivatedRoute,
    private advertService: AdvertService,
  ) {}

  public advert: IProduct | undefined = undefined;
  public idAdvert: string = '';
  public imageIds: Signal<string[]> = signal([]);
  public advertServiceSubscription: Subscription | undefined;

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.idAdvert = params['productId'];
      this.advertServiceSubscription = this.advertService
        .getOneAdvert(this.idAdvert)
        .subscribe((advert: IProduct): void => {
          this.advert = advert;
          console.log(this.advert.imagesIds);
          this.imageIds = signal(this.advert.imagesIds);
        });
    });
  }

  public ngOnDestroy(): void {
    this.advertServiceSubscription?.unsubscribe();
  }
}
