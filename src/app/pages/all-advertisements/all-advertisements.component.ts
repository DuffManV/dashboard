import { Component } from '@angular/core';
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

@Component({
  selector: 'app-all-advertisements',
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
  templateUrl: './all-advertisements.component.html',
  styleUrl: './all-advertisements.component.scss',
})
export class AllAdvertisementsComponent {
  public request: string = 'Запрос';
  public showButtonText: string = 'Показать объявления';
  public categories$: Observable<ICategory[]> = categories$;
  public categoryProducts$: Observable<IProduct[]> = categoryProducts$;
  public selectedNode: TreeNode | null = null;

  public listenEvent(event: TreeNodeSelectEvent): void {
    event.node.expanded = event.node.expanded !== true;
  }
}
