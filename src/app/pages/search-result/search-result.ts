import {
  Component,
  inject,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { AsyncPipe, KeyValuePipe, NgForOf } from '@angular/common';
import { AdvertPreviewComponent } from '../../components/advert-preview/advert-preview.component';
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
  private route: ActivatedRoute = inject(ActivatedRoute);
  private searchService: SearchService = inject(SearchService);
  private categoriesService: CategoryService = inject(CategoryService);
  private categoriesTreeService: CategoriesTreeService = inject(
    CategoriesTreeService,
  );
  private searchSubscription: Subscription | null = null;
  private routeSubscription: Subscription | null = null;
  private categorySubscription: Subscription | null = null;

  public request: string = '';
  public readonly showButtonText: string = 'Показать объявления';
  public readonly title: string = 'Объявления по запросу';
  public readonly priceLabel: string = 'Цена';
  public selectedNode: any | null = null;
  public result: WritableSignal<[]> = signal([]);
  public categories: any[] = [];
  public categoriesNode: ICategory[] | undefined = [];

  public ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(
      (data: Params): void => {
        this.request = data['search'];
        this.search();
      },
    );
    this.categorySubscription = this.categoriesService
      .getCategories()
      .subscribe((data: ICategory[]): void => {
        this.categories = data;
        this.categoriesNode =
          this.categoriesTreeService.createCategoriesNode(data);
      });
  }

  public search(): void {
    if (this.request) {
      this.searchSubscription = this.searchService
        .search(this.request.toLowerCase(), null)
        .subscribe((data: any): void => {
          this.result.set(data);
        });
    }
  }

  public listenEvent(event: TreeNodeSelectEvent): void {
    if (this.selectedNode?.children?.length > 0) {
      event.node.expanded = !event.node.expanded;
    } else {
      this.searchSubscription = this.searchService
        .search('', this.selectedNode.id)
        .subscribe((data: []): void => {
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
    this.categorySubscription?.unsubscribe();
  }
}
