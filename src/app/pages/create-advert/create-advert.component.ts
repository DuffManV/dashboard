import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonComponent } from '../../components/button/button.component';
import { DropdownModule } from 'primeng/dropdown';
import Categories from '../../data/categories';
import { CategoryService } from '../../services/category.service';
import { Observable, of } from 'rxjs';
import ICategory from '../../interfaces/ICategory';
import { AsyncPipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';

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
  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
  ) {
    this.createAdvertForm = fb.group({
      category: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      address: ['', Validators.required],
      images: [''],
      price: [''],
    });
  }

  public title: string = 'Новое объявление';
  public createAdvertForm: FormGroup<any>;
  public categories: { name: string; code: string }[] = [];
  public selectedCategory: string = '';

  public ngOnInit(): void {
    this.categoryService
      .getCategories()
      .subscribe((categories: ICategory[]) => {
        this.categories = categories.map((category) => {
          return {
            name: category.name,
            code: category.id,
          };
        });
        console.log(this.categories);
      });
  }
}
