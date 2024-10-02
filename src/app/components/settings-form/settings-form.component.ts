import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import IUser from '../../interfaces/IUser';
import { ButtonComponent } from '../button/button.component';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
  ],
  templateUrl: './settings-form.component.html',
  styleUrl: './settings-form.component.scss',
})
export class SettingsFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {
    this.settingsForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      address: [''],
    });
  }
  public settingsForm: FormGroup<any>;
  public user: IUser | undefined;

  public ngOnInit(): void {
    const user: string | null = localStorage.getItem('user');
    this.user = user ? JSON.parse(user) : '';
    this.settingsForm.controls['name'].setValue(this.user?.name);
  }

  public saveSettings(): void {
    console.log('saved');
  }
}
