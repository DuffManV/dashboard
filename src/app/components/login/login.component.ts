import { Component, OnDestroy, OnInit } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { InputMaskModule } from 'primeng/inputmask';
import { Subscription } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../../services/user.service';
import IUser from '../../interfaces/IUser';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    DialogModule,
    Button,
    InputTextModule,
    RouterLink,
    FormsModule,
    InputMaskModule,
    RegisterComponent,
    ReactiveFormsModule,
    DropdownModule,
  ],
  providers: [AuthService, ApiService, UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  public visible: boolean = false;
  public header: string = 'Авторизация';
  public isRegisterVisible: boolean = false;
  public user: IUser | undefined = undefined;
  public showEnter: boolean = false;
  public errorMessage: string = '';
  public loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private fb: FormBuilder,
  ) {
    this.loginForm = this.fb.group({
      phone: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.getCurrentUser();
    } else {
      this.showEnter = true;
    }
  }

  public login(): Subscription {
    return this.authService
      .login(
        this.loginForm.controls['phone'].value,
        this.loginForm.controls['password'].value,
      )
      .subscribe({
        next: () => {
          this.visible = !this.authService.isLoggedIn;
          this.getCurrentUser();
        },
        error: (resp) => (this.errorMessage = resp?.error?.errors[0]),
      });
  }

  public getCurrentUser(): Subscription {
    return this.userService.getCurrentUser().subscribe({
      next: (user: IUser): void => {
        this.user = <IUser>user;
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
      },
      error: (resp) => {
        console.log(resp);
        if (resp?.error?.errors[0] === 0) {
        }
      },
    });
  }

  public showDialog(): void {
    this.visible = true;
    this.isRegisterVisible = false;
  }

  public showRegister(): void {
    this.isRegisterVisible = true;
    this.visible = false;
  }

  public ngOnDestroy(): void {
    this.login().unsubscribe();
    this.getCurrentUser().unsubscribe();
  }
}
