import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject, Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

class permissionService {
  constructor(
    private router: Router,
    private auth: AuthService
  ) {
  }

  canActivate() {
    let authStatus$ = this.auth.authStatus.subscribe();
    console.log('guards', !!authStatus$);
    if (!!authStatus$) {
      return true;
    } else {
      this.router.navigate(['/admin', 'login']).then();
      this.auth.logout();
      return false;
    }
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(permissionService).canActivate();
}
