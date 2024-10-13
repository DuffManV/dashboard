import { CreateAdvertComponent } from '../pages/create-advert/create-advert.component';
import { MyAdvertisementComponent } from '../pages/my-advertisement/my-advertisement.component';
import { SettingsComponent } from '../pages/settings/settings.component';

export const ROUTES_PROFILES = [
  { path: 'create-advert', component: CreateAdvertComponent },
  { path: 'my-adverts', component: MyAdvertisementComponent },
  { path: 'settings', component: SettingsComponent },
];
