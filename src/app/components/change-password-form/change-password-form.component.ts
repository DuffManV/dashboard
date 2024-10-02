import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, ButtonComponent],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.scss',
})
export class ChangePasswordFormComponent {
  public changePasswordForm: FormGroup<any>;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
  ) {
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }
  public changePassword() {
    console.log('password changed');
  }
}
