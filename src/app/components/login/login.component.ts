import { Component, InputSignal, signal, WritableSignal } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { Button } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DialogModule, Button, InputTextModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public visible: boolean = false;
  public header: string = 'Авторизация';
  public showDialog(): void {
    this.visible = true;
  }
}
