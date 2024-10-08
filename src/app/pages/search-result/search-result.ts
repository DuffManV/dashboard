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
import { SearchService } from '../../services/search.service';

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
    private searchService: SearchService,
  ) {}

  public request: string = '';
  public readonly showButtonText: string = 'Показать объявления';
  public readonly title: string = 'Объявления по запросу';
  public readonly priceLabel: string = 'Цена';
  public categories$: Observable<ICategory[]> = categories$;
  public categoryProducts$: Observable<IProduct[]> = categoryProducts$;
  public selectedNode: TreeNode | null = null;
  public result: Object = {};
  public searchSubscription: Subscription | null = null;
  private routeSubscription: Subscription | null = null;

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe((data: Params) => {
      this.request = data['search'];
      this.search();
    });
  }

  public search(): Subscription | undefined {
    if (this.request) {
      this.searchSubscription = this.searchService
        .search(this.request)
        .subscribe((data: Object): void => {
          this.result = data;
          console.log('SEARCH', data);
        });
      return;
    }
    return undefined;
  }

  public listenEvent(event: TreeNodeSelectEvent): void {
    event.node.expanded = event.node.expanded !== true;
  }

  public ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }
}
