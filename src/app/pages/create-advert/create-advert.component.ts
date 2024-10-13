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
import ICategory from '../../interfaces/ICategory';
import { AsyncPipe, NgForOf, NgIf } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { AdvertService } from '../../services/advert.service';
import { InputMaskModule } from 'primeng/inputmask';
import ICreateAdvert from '../../interfaces/ICreateAdvert';
import { DadataAddressService } from '../../services/dadataAddress.service';
import {
  AutoCompleteCompleteEvent,
  AutoCompleteModule,
} from 'primeng/autocomplete';

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
    FileUploadModule,
    NgIf,
    NgForOf,
    InputMaskModule,
    AutoCompleteModule,
  ],
  providers: [ApiService, CategoryService, AdvertService, DadataAddressService],
  templateUrl: './create-advert.component.html',
  styleUrl: './create-advert.component.scss',
})
export class CreateAdvertComponent implements OnInit {
  private fb: FormBuilder = inject(FormBuilder);
  private categoryService: CategoryService = inject(CategoryService);
  private advertService: AdvertService = inject(AdvertService);
  private dadataAddressService: DadataAddressService =
    inject(DadataAddressService);

  public title: string = 'Новое объявление';
  public categories: ICategory[] = [];
  public uploadedFiles: any[] = [];
  public filteredLocation: [] = [];

  public get categoriesForm(): any[] {
    return (this.form.get('categories') as FormArray).controls;
  }

  public form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    description: [''],
    location: ['', Validators.required],
    images: [[]],
    cost: ['', Validators.required],
    email: ['', Validators.email],
    phone: ['', Validators.required],
    categories: this.fb.array([
      this.fb.group({
        category: [null, Validators.required],
      }),
    ]),
  });

  public ngOnInit(): void {
    this.categoryService.getCategories().subscribe((res: ICategory[]) => {
      this.categories = res;
    });
  }

  public getOptions(id: string): any {
    if (!id) {
      id = environment.emptyId;
    }
    return this.categories?.filter(
      (category: ICategory): boolean => category.parentId === id,
    );
  }

  public addControl(category: any): void {
    if (this.getOptions(category?.category?.id).length) {
      console.warn(this.getOptions(category?.category?.id));
      const item: FormGroup = this.fb.group({
        category: [null, Validators.required],
      });
      (<FormArray>this.form?.get('categories'))?.push(item);
    }
  }

  public onSelect(event: FileSelectEvent): void {
    this.form.get('images')?.setValue(event.currentFiles);
  }

  public getAddress(event: AutoCompleteCompleteEvent): void {
    console.log(event);
    this.dadataAddressService.getAddress(event.query).subscribe((res: any) => {
      console.log(res);
      this.filteredLocation = res?.suggestions.map(
        (item: any): { code: string; name: string } => ({
          name: item.value,
          code: item.value,
        }),
      );
    });
    console.log(this.filteredLocation);
  }

  public createAdvert(): void {
    const formValue: ICreateAdvert = this.form.getRawValue();
    console.log('value', formValue);
    const model: FormData = new FormData();
    model.append('Name', formValue.name);
    model.append('Description', formValue.description);
    model.append('Cost', formValue.cost);
    model.append('Email', formValue.email);
    model.append('Phone', formValue.phone);
    model.append(
      'CategoryId',
      formValue.categories[this.categoriesForm.length - 1].category.id,
    );
    model.append('Location', formValue.location.name);
    formValue.images.forEach((image: File) => {
      model.append('Images', image);
    });
    console.log(formValue);

    this.advertService
      .createAdvert(model)
      .subscribe((res: any) => console.log(res));
  }
}
