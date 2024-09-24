import {
  Component,
  OnDestroy,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { InputMaskModule } from 'primeng/inputmask';
import { Observable, Subscription } from 'rxjs';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../../services/user.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import IUser from '../../interfaces/IUser';

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
    AsyncPipe,
    JsonPipe,
  ],
  providers: [AuthService, ApiService, UserService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(
    private authService: AuthService,
    private userService: UserService,
  ) {}

  public visible: boolean = false;
  public header: string = 'Авторизация';
  public phone: string = '';
  public password: string = '';
  public isRegisterVisible: boolean = false;
  public user: IUser | undefined = undefined;
  public showEnter: boolean = false;

  public ngOnInit(): void {
    if (localStorage.getItem('authUser')) {
      this.userService.getCurrentUser().subscribe((user: ArrayBuffer): void => {
        this.user = <IUser>(<unknown>user);
        localStorage.setItem('user', JSON.stringify(this.user));
        console.log(this.user);
      });
    } else {
      this.showEnter = true;
    }
  }

  public login(): Subscription {
    return this.authService
      .login(this.phone, this.password)
      .subscribe(() => (this.visible = !this.authService.isLoggedIn));
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
  }
}
