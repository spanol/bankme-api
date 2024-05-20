import { HttpInterceptor, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../auth/auth.service';
// import { Injectable } from '@angular/core';
// import {
//   HttpInterceptor,
//   HttpRequest,
//   HttpHandler,
//   HttpEvent,
// } from '@angular/common/http';
// import { Observable, from } from 'rxjs';
// import { AuthService } from '../auth/auth.service';

// @Injectable()
// export class TokenInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(
//     request: HttpRequest<any>,
//     next: HttpHandler
//   ): Observable<HttpEvent<any>> {
//     console.log('Intercepting request');
//     const authRequest = request.clone({
//       setHeaders: {
//         Authorization: `Bearer ${this.authService.getToken()}`,
//       },
//     });
//     console.log('authRequest', authRequest);

//     return next.handle(authRequest);
//   }
// }

export const TokenInterceptor: HttpInterceptorFn = (request, next) => {
  const authService = inject(AuthService);
  console.log('Intercepting request');
  const authRequest = request.clone({
    setHeaders: {
      Authorization: `Bearer ${authService.getToken()}`,
    },
  });
  console.log('authRequest', authRequest);

  return next(authRequest);
};
