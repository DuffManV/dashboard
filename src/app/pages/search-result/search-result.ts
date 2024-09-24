import { Component, OnDestroy, OnInit } from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgForOf } from '@angular/common';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import IProduct from '../../interfaces/IProduct';
import ICategory from '../../interfaces/ICategory';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree';
import { Observable, Subscription } from 'rxjs';
import categoryProducts$ from '../../data/category-products';
import categories$ from '../../data/categories';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    NgForOf,
    ProductPreviewComponent,
    KeyValuePipe,
    InputGroupModule,
    InputTextModule,
    Button,
    TreeModule,
    AsyncPipe,
  ],
  providers: [HttpClient],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) {}

  public request: string | null = '';
  public readonly showButtonText: string = 'Показать объявления';
  public readonly title: string = 'Объявления по запросу';
  public readonly priceLabel: string = 'Цена';
  public categories$: Observable<ICategory[]> = categories$;
  public categoryProducts$: Observable<IProduct[]> = categoryProducts$;
  public selectedNode: TreeNode | null = null;
  public result: Object = {};
  private subscription: Subscription | undefined;
  private routeSubscription: Subscription | undefined;

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(
      (data: Params) => (this.request = data['search']),
    );
    this.subscription = this.http
      .post(`${environment.apiUrl}/advert/search`, {
        search: this.request,
        showNonActive: true,
      })
      .subscribe((data: any): void => {
        this.result = data;
      });
  }

  public listenEvent(event: TreeNodeSelectEvent): void {
    event.node.expanded = event.node.expanded !== true;
  }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.routeSubscription?.unsubscribe();
  }
}
