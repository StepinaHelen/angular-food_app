import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { Router } from '@angular/router';
import { AuthsService } from 'src/app/service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authsService: AuthsService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const req = request.clone({
      setParams: {
        auth: `${this.authsService.userId}`,
      },
    });

    return next.handle(req).pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.authsService.signOut();
          this.router.navigate(['/login']);
        }
        return throwError(() => err);
      })
    );
  }
}
