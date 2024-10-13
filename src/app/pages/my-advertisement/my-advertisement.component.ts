import { Component, inject, OnInit } from '@angular/core';
import { AdvertPreviewComponent } from '../../components/product-preview/advert-preview.component';
import { AdvertService } from '../../services/advert.service';
import { ApiService } from '../../services/api.service';
import { UserService } from '../../services/user.service';
import { Observable, tap } from 'rxjs';
import { MySingleAdvertComponent } from '../../components/my-single-advert/my-single-advert.component';
import { AsyncPipe } from '@angular/common';
import IUser from '../../interfaces/IUser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-advertisement',
  standalone: true,
  imports: [
    AdvertPreviewComponent,
    MySingleAdvertComponent,
    AsyncPipe,
    RouterLink,
  ],
  providers: [ApiService, AdvertService],
  templateUrl: './my-advertisement.component.html',
  styleUrl: './my-advertisement.component.scss',
})
export class MyAdvertisementComponent {
  private userService: UserService = inject(UserService);

  public user$: Observable<IUser> = this.userService.getCurrentUser();
}
