import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../modules/auth/auth.service';

export const TokenInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(AuthService);
  const authRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`,
    },
  });

  return next(authRequest);
};
