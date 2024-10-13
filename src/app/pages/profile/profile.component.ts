import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ButtonComponent } from '../../components/button/button.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ApiService } from '../../services/api.service';
import { SettingsFormComponent } from '../../components/settings-form/settings-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    ButtonComponent,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule,
    SettingsFormComponent,
    RouterOutlet,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
  providers: [UserService, ApiService],
})
export class ProfileComponent {}
