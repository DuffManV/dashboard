import { Component, inject, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonComponent } from '../../components/button/button.component';
import { DropdownModule } from 'primeng/dropdown';
import { CategoryService } from '../../services/category.service';
import { tap } from 'rxjs';
import ICategory from '../../interfaces/ICategory';
import { AsyncPipe } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-advert',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    ButtonComponent,
    DropdownModule,
    AsyncPipe,
  ],
  providers: [ApiService, CategoryService],
  templateUrl: './create-advert.component.html',
  styleUrl: './create-advert.component.scss',
})
export class CreateAdvertComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private categoryService: CategoryService = inject(CategoryService);

  public title: string = 'Новое объявление';
  public categories: ICategory[] = [];
  public selectedCategory: string = '';
  public get categoriesForm(): any[] {
    return (this.form.get('categories') as FormArray).controls;
  }

  public form: FormGroup<any> = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    address: ['', Validators.required],
    images: [''],
    price: [''],
    categories: this.fb.array([
      this.fb.group({
        category: [null, Validators.required],
      }),
    ]),
  });

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res) => {
      this.categories = res;
    });
    console.warn();
  }

  public getOptions(id: string): any {
    // if (!id) {
    //   id = environment.empty_id;
    // }
    console.log(this.categoriesForm[0].getRawValue());
    return this.categories?.filter(
      (category: ICategory) => category.parentId === id,
    );
  }

  public addControl(category: any): void {
    if (this.getOptions(category?.category?.id).length) {
      console.warn(this.getOptions(category?.category?.id));
      const item = this.fb.group({
        category: [null, Validators.required],
      });
      (<FormArray>this.form?.get('categories'))?.push(item);
    }
  }
}
