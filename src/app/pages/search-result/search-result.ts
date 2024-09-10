import { Component, input, InputSignal } from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgForOf } from '@angular/common';
import { ProductPreviewComponent } from '../../components/product-preview/product-preview.component';
import IProduct from '../../interfaces/IProduct';
import ICategory from '../../interfaces/ICategory';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree';
import { Observable, of } from 'rxjs';
import categoryProducts$ from '../../data/category-products';
import categories$ from '../../data/categories';
import { TreeNode } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';

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
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.request = this.route.snapshot.paramMap.get('search');
  }
  public request: string | null = '';
  public showButtonText: string = 'Показать объявления';
  public title: string = 'Объявления по запросу';
  public priceLabel: string = 'Цена';
  public categories$: Observable<ICategory[]> = categories$;
  public categoryProducts$: Observable<IProduct[]> = categoryProducts$;
  public selectedNode: TreeNode | null = null;

  public listenEvent(event: TreeNodeSelectEvent): void {
    event.node.expanded = event.node.expanded !== true;
  }
}
