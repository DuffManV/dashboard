import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import IUser from '../../interfaces/IUser';
import { ButtonComponent } from '../../components/button/button.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ApiService } from '../../services/api.service';
import { SettingsFormComponent } from '../../components/settings-form/settings-form.component';
import { ChangePasswordFormComponent } from '../../components/change-password-form/change-password-form.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    SettingsFormComponent,
    ChangePasswordFormComponent,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [UserService, ApiService],
})
export class ProfileComponent {}
