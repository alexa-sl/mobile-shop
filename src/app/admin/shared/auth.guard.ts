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

  authState: boolean = false;
  authStatus$ = this.auth.authStatus.subscribe(res => {
    this.authState = res;
  });
  canActivate() {
    console.log('guards', this.authState);
    if (this.authState) {
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
