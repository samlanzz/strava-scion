import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { AuthService } from '../core/auth/auth.service';
import { Injectable } from '@angular/core';
import { catchError, filter, finalize, flatMap, take } from 'rxjs/operators';

@Injectable()
export class StravaHttpInterceptor implements HttpInterceptor {

  refreshTokenInProgress = false;
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.accessToken}`
      }
    });
    return next.handle(req).pipe(catchError(error => {
      if (error && error.status === 401) {
        if (this.refreshTokenInProgress) {
          return this.refreshTokenSubject.pipe(
            filter(result => result !== null),
            take(1),
            flatMap(() => next.handle(req))
          );
        } else {
          this.refreshTokenInProgress = true;
          this.refreshTokenSubject.next(null);
          return this.authService.refreshTokenFromApi().pipe(
            flatMap((success) => {
              this.refreshTokenSubject.next(success);
              return next.handle(req);
            }),
            finalize(() => this.refreshTokenInProgress = false)
          );
        }
      } else {
        return throwError(error);
      }
    }));
  }
}
