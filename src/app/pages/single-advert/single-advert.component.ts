import {
  Component,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { ActivatedRoute, Params } from '@angular/router';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';
import IProduct from '../../interfaces/IProduct';
import { ImageService } from '../../services/image.service';
import { GalleryComponent } from '../../components/gallery/gallery.component';
import { Subscription } from 'rxjs';
import { SellerPhoneComponent } from '../../components/seller-phone/seller-phone.component';
import { ButtonComponent } from '../../components/button/button.component';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-single-advert',
  standalone: true,
  imports: [
    GalleriaModule,
    GalleryComponent,
    SellerPhoneComponent,
    ButtonComponent,
    Button,
  ],
  templateUrl: './single-advert.component.html',
  styleUrl: './single-advert.component.scss',
  providers: [AdvertService, ApiService, ImageService],
})
export class SingleAdvertComponent implements OnInit, OnDestroy {
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private advertService: AdvertService = inject(AdvertService);
  private advertServiceSubscription: Subscription | undefined;

  public advert: IProduct | undefined = undefined;
  public idAdvert: string = '';
  public imageIds: string[] = [];
  public showPhone: boolean = false;

  public ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params): void => {
      this.idAdvert = params['advertId'];
      this.advertServiceSubscription = this.advertService
        .getOneAdvert(this.idAdvert)
        .subscribe((advert: IProduct): void => {
          this.advert = advert;
          this.imageIds = this.advert.imagesIds;
        });
    });
  }

  public showPhoneFn(value: boolean): void {
    this.showPhone = value;
  }

  public ngOnDestroy(): void {
    this.advertServiceSubscription?.unsubscribe();
  }
}
