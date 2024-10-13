import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgForOf } from '@angular/common';
import { AdvertPreviewComponent } from '../../components/product-preview/advert-preview.component';
import IProduct from '../../interfaces/IProduct';
import { Observable, of } from 'rxjs';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [NgForOf, AdvertPreviewComponent, AsyncPipe],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [AdvertService, ApiService],
})
export class MainComponent implements OnInit {
  constructor(private advertService: AdvertService) {}

  public products$: Observable<IProduct[]> | undefined = undefined;

  public ngOnInit(): void {
    this.products$ = this.advertService.getAdverts({});
  }
}
