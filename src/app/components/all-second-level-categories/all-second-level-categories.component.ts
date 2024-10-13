import { Component, effect, input, InputSignal } from '@angular/core';
import ICategory from '../../interfaces/ICategory';

@Component({
  selector: 'app-all-second-level-categories',
  standalone: true,
  imports: [],
  templateUrl: './all-second-level-categories.component.html',
  styleUrl: './all-second-level-categories.component.scss',
})
export class AllSecondLevelCategoriesComponent {
  public category: InputSignal<ICategory | undefined> = input();
  public categories: InputSignal<[]> = input([]);
  public items: any[] = [];
  constructor() {
    effect((): void => {
      this.items = [];
      this.categories().forEach((items: ICategory[]) => {
        items.forEach((item: ICategory): void => {
          if (item.parentId === this.category()?.id) {
            this.items.push(item);
          }
        });
      });
      console.log(this.items);
    });
  }
}
