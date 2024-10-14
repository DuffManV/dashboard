import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgForOf } from '@angular/common';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { Button } from 'primeng/button';
import { TreeModule, TreeNodeSelectEvent } from 'primeng/tree';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { CategoryService } from '../../services/category.service';
import ICategory from '../../interfaces/ICategory';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { AdvertPreviewComponent } from '../../components/advert-preview/advert-preview.component';
import { CategoriesTreeService } from '../../services/categoriesTree.service';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    NgForOf,
    AdvertPreviewComponent,
    KeyValuePipe,
    InputGroupModule,
    InputTextModule,
    Button,
    TreeModule,
    AsyncPipe,
  ],
  providers: [SearchService, CategoryService, ApiService],
  templateUrl: './search-result.html',
  styleUrl: './search-result.scss',
})
export class SearchResult implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
    private categoriesService: CategoryService,
    private categoriesTreeService: CategoriesTreeService,
    private routeSubscription: Subscription | null,
  ) {}

  public request: string = '';
  public readonly showButtonText: string = 'Показать объявления';
  public readonly title: string = 'Объявления по запросу';
  public readonly priceLabel: string = 'Цена';
  public selectedNode: any | null = null;
  public result: WritableSignal<[]> = signal([]);
  public searchSubscription: Subscription | null = null;
  public categorySubscription: Subscription | null = null;
  public categories: any[] = [];
  public categoriesNode: ICategory[] | undefined = [];

  public ngOnInit(): void {
    this.categorySubscription = this.categoriesService
      .getCategories()
      .subscribe((data: ICategory[]): void => {
        this.categories = data;
        this.categoriesNode =
          this.categoriesTreeService.createCategoriesNode(data);
        console.log(data);
      });
    this.categorySubscription = this.categoriesService
      .getCategories()
      .subscribe((data: ICategory[]): void => {
        console.log(data);
        const categories: ICategory[] = [];
        data.forEach((data: any): void => {
          if (data.parentId === environment.emptyId) {
            categories.push({
              id: data.id,
              parentId: data.parentId,
              label: data.name,
              children: [],
              name: data.name,
            });
          }
        });
        categories.map((category: ICategory) => {
          data.forEach((data: ICategory) => {
            if (category.id === data.parentId) {
              category.children &&
                category.children.push(<ICategory>{
                  id: data.id,
                  label: data.name,
                });
            }
          });
        });
        this.categories = categories;
        console.log(this.categories);
      });
  }

  public search(): void {
    if (this.request) {
      this.searchSubscription = this.searchService
        .search(this.request.toLowerCase(), null)
        .subscribe((data: any): void => {
          this.result.set(data);
          console.log('SEARCH', data);
        });
    }
  }

  public listenEvent(event: TreeNodeSelectEvent): void {
    if (this.selectedNode?.children?.length > 0) {
      event.node.expanded = !event.node.expanded;
    } else {
      this.searchSubscription = this.searchService
        .search('', this.selectedNode.id)
        .subscribe((data) => {
          this.result.set(data);
          this.request = '';
          console.log('search result', this.result());
        });
      console.log(this.selectedNode);
    }
  }

  public ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
    this.searchSubscription?.unsubscribe();
  }
}
