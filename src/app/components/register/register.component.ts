import { Component, Input, OnDestroy } from '@angular/core';
import { Button } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { InputMaskModule } from 'primeng/inputmask';
import { Subscription, throwError } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    Button,
    DialogModule,
    InputTextModule,
    FormsModule,
    InputMaskModule,
  ],
  providers: [AuthService, ApiService],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnDestroy {
  constructor(
    public authService: AuthService,
    public loginComp: LoginComponent,
  ) {}

  @Input() visible: boolean = false;
  public login: string | undefined;
  public name: string | undefined;
  public password: string | undefined;
  public isRegistered: boolean = false;

  public register(): Subscription {
    return this.authService
      .register(this.login, this.name, this.password)
      .subscribe((data: ArrayBuffer): void => {
        if (data) {
          this.isRegistered = true;
        }
        throwError(() => (err: string) => console.error(err));
      });
  }

  ngOnDestroy(): void {
    this.register().unsubscribe();
  }
}
