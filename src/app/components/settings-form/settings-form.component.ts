import {Component, inject, model, OnDestroy, OnInit} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import IUser from '../../interfaces/IUser';
import {ButtonComponent} from '../button/button.component';
import {InputTextModule} from 'primeng/inputtext';
import {PaginatorModule} from 'primeng/paginator';
import {UserService} from '../../services/user.service';
import IChangeUser from '../../interfaces/IChangeUser';
import {InputMaskModule} from 'primeng/inputmask';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-settings-form',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextModule,
    PaginatorModule,
    ReactiveFormsModule,
    InputMaskModule,
  ],
  templateUrl: './settings-form.component.html',
  styleUrl: './settings-form.component.scss',
})
export class SettingsFormComponent implements OnInit, OnDestroy {
  private fb: FormBuilder = inject(FormBuilder);
  private userService: UserService = inject(UserService);
  private userServiceSubscription: Subscription | undefined = undefined;

  public settingsForm: FormGroup = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    currentPassword: ['', Validators.required],
    newPassword: ['', Validators.required],
  });

  public user: IUser | undefined;

  public ngOnInit(): void {
    this.userServiceSubscription = this.userService
      .getCurrentUser()
      .subscribe((user: IUser) => {
        this.user = user;
        this.user && this.settingsForm.controls['name'].setValue(this.user.name);
      });

  }

  public saveSettings(): void {
    const formValue: IChangeUser = this.settingsForm.getRawValue();
    const model: FormData = new FormData();
    model.append('name', formValue.name);
    model.append('login', formValue.phone);
    model.append('password', formValue.newPassword);
    this.userServiceSubscription = this.userService
      .updateUser(this.user?.id, model)
      .subscribe((res) => console.log(res));
  }

  public ngOnDestroy(): void {
    this.userServiceSubscription?.unsubscribe();
  }
}
