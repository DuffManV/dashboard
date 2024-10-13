import { Injectable } from '@angular/core';
import ICategory from '../interfaces/ICategory';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriesTreeService {
  public categoriesNode: ICategory[] | undefined = [];

  public createCategoriesNode(data: ICategory[]): ICategory[] | undefined {
    this.createParentNode(data);
    this.categoriesNode = this.createChildrenNode(data, this.categoriesNode);
    this.categoriesNode?.map((parent) => {
      parent.children = this.createChildrenNode(data, parent.children);
    });
    return this.categoriesNode;
  }

  public createParentNode(categories: ICategory[]): any {
    categories.forEach((category) => {
      if (category.parentId === environment.emptyId) {
        this.categoriesNode?.push({
          id: category.id,
          name: category.name,
          label: category.name,
          children: [],
          parentId: category.parentId,
        });
      }
    });
  }

  public createChildrenNode(
    categories: ICategory[],
    parents: ICategory[] | undefined,
  ): ICategory[] | undefined {
    parents?.map((parent: ICategory): void => {
      categories.forEach((data: ICategory): void => {
        if (parent.id === data.parentId) {
          parent?.children?.push(<ICategory>{
            id: data.id,
            name: data.name,
            label: data.name,
            children: [],
            parentId: data.parentId,
          });
        }
      });
    });
    return parents;
  }
}
