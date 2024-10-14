import { Component, inject, OnInit } from '@angular/core';
import { AdvertPreviewComponent } from '../../components/advert-preview/advert-preview.component';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { UserSingleAdvertComponent } from '../../components/user-single-advert/user-single-advert.component';
import { AsyncPipe } from '@angular/common';
import IUser from '../../interfaces/IUser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-advertisement',
  standalone: true,
  imports: [
    AdvertPreviewComponent,
    UserSingleAdvertComponent,
    AsyncPipe,
    RouterLink,
  ],
  providers: [ApiService, AdvertService],
  templateUrl: './user-advertisement.component.html',
  styleUrl: './user-advertisement.component.scss',
})
export class UserAdvertisementComponent {
  private userService: UserService = inject(UserService);

  public user$: Observable<IUser> = this.userService.getCurrentUser();
}
