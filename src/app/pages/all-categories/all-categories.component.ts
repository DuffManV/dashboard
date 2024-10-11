import { Component, inject, Input, InputSignal, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common';
import { CategoryService } from '../../services/category.service';
import ICategory from '../../interfaces/ICategory';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../services/api.service';

export interface TreeNode {
  id: number;
  name: string;
  children?: TreeNode[];
}

@Component({
  selector: 'app-all-categories',
  standalone: true,
  imports: [NgIf, NgForOf],
  templateUrl: './all-categories.component.html',
  styleUrl: './all-categories.component.scss',
  providers: [CategoryService, ApiService],
})
export class AllCategoriesComponent implements OnInit {
  private categoriesService: CategoryService = inject(CategoryService);
  public categories: ICategory[] = [];
  public categoriesNode: ICategory[] = [];
  @Input() treeNodes: TreeNode[] = [
    {
      id: 1,
      name: 'Узел 1',
      children: [
        {
          id: 2,
          name: 'Узел 1.1',
          children: [
            {
              id: 3,
              name: 'Узел 1.1.1',
              children: [],
            },
            {
              id: 4,
              name: 'Узел 1.1.2',
              children: [],
            },
          ],
        },
        {
          id: 5,
          name: 'Узел 1.2',
          children: [],
        },
      ],
    },
    {
      id: 6,
      name: 'Узел 2',
      children: [
        {
          id: 7,
          name: 'Узел 2.1',
          children: [],
        },
      ],
    },
  ];

  public ngOnInit(): void {
    this.categoriesService
      .getCategories()
      .subscribe((data: ICategory[]): void => {
        this.categories = data;
        this.createParentNode(data);
        this.categoriesNode = this.createChildrenNode(
          data,
          this.categoriesNode,
        );
        console.log(this.categoriesNode);
      });
  }

  public createParentNode(categories: ICategory[]): any {
    categories.forEach((category) => {
      if (category.parentId === environment.empty_id) {
        this.categoriesNode.push({
          id: category.id,
          name: category.name,
          children: [],
          parentId: category.parentId,
        });
      }
    });
  }

  public createChildrenNode(
    categories: ICategory[],
    parents: ICategory[],
  ): ICategory[] {
    parents.map((parent: ICategory) => {
      categories.forEach((data: ICategory) => {
        if (parent.id === data.parentId) {
          parent?.children?.push(<ICategory>{
            id: data.id,
            name: data.name,
            children: [],
            parentId: data.parentId,
          });
        }
      });
    });
    return parents;
  }
}
