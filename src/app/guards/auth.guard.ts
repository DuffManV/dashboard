import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from '@angular/router';

export const authGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const user = localStorage.getItem('user');
  if (!user) {
    return state;
  }
  return
};
