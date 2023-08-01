import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {catchError, Observable, tap, throwError} from "rxjs";

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      tap(() => console.log('interceptor works!', req)),
      catchError(err => {
        if(err.status === 401) {
          console.log(err);
          this.router.navigate(['/admin', 'login']).then();
        }

        return throwError(err);
      })
    )
  }
}
