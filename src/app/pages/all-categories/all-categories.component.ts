import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {CategoryService} from '../../services/category.service';
import ICategory from '../../interfaces/ICategory';
import {ApiService} from '../../services/api.service';
import {TreeModule} from 'primeng/tree';
import {CategoriesTreeService} from '../../services/categoriesTree.service';
import {Subscription} from 'rxjs';
import {environment} from '../../../environments/environment';
import {
  SecondLevelCategoriesComponent
} from '../../components/all-second-level-categories/second-level-categories.component';
import {AdvertPreviewComponent} from '../../components/advert-preview/advert-preview.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-categories',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    TreeModule,
    SecondLevelCategoriesComponent,
    AdvertPreviewComponent,
  ],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss',
  providers: [CategoryService, CategoriesTreeService, ApiService],
})
export class AllCategoriesComponent implements OnInit, OnDestroy {
  private categoriesService: CategoryService = inject(CategoryService);
  private categoriesTreeService: CategoriesTreeService = inject(
    CategoriesTreeService,
  );
  private categoryServiceSubscription: Subscription | undefined;

  public categoriesNode: ICategory[] | undefined = [];
  public fistLevelCategories: ICategory[] | undefined = [];
  public secondLevelCategories: any = [];
  public category: ICategory | undefined = undefined;

  public ngOnInit(): void {
    this.categoryServiceSubscription = this.categoriesService
      .getCategories()
      .subscribe((data: ICategory[]): void => {
        this.categoriesNode =
          this.categoriesTreeService.createCategoriesNode(data);
        this.fistLevelCategories = this.categoriesNode?.filter(
          (node: ICategory): boolean => node.parentId === environment.emptyId,
        );
        this.secondLevelCategories = this.categoriesNode?.map(
          (category: ICategory) => category.children,
        );
      });
  }

  public handleClickCategory(category: ICategory): void {
    this.category = category;
  }

  public ngOnDestroy(): void {
    this.categoryServiceSubscription?.unsubscribe();
  }
}
