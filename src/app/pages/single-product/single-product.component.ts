import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';
import IProduct from '../../interfaces/IProduct';
import { ImageService } from '../../services/image.service';
import { ImageCardComponent } from '../../components/image-card/image-card.component';
import IProductImage from '../../interfaces/IProductImage';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [GalleriaModule, ImageCardComponent],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.scss',
  providers: [AdvertService, ApiService, ImageService],
})
export class SingleProductComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private advertService: AdvertService,
    private imageService: ImageService,
  ) {}

  public images$: Observable<IProductImage[]> | undefined = of([]);
  public advert: IProduct | undefined = undefined;
  public imageIds: string[] = [];
  public idAdvert: string = '';

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.idAdvert = params['productId'];
    });
    this.advertService
      .getOneAdvert(this.idAdvert)
      .subscribe((advert: IProduct): void => {
        this.advert = advert;
        this.imageIds = advert.imagesIds;
      });
  }
}
