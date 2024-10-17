import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const user: string | null = localStorage.getItem('user');

  if (user) {
    return true;
  }
  router.navigate(['/login']);
  return false;
};
