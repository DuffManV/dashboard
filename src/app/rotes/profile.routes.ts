import { CreateAdvertComponent } from '../pages/create-advert/create-advert.component';
import { UserAdvertisementComponent } from '../pages/user-advertisement/user-advertisement.component';
import { SettingsComponent } from '../pages/settings/settings.component';

export const ROUTES_PROFILES = [
  { path: 'create-advert', component: CreateAdvertComponent },
  { path: 'my-adverts', component: UserAdvertisementComponent },
  { path: 'settings', component: SettingsComponent },
];
