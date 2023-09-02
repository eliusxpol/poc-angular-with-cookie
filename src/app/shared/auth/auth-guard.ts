import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    let userInfo = this.auth.loadUserFromLocalStorage();

    if (route.data['userType'] === 'guest') {
      return true;
    } else if (route.data['userType'] === 'loged-in') {
      if (userInfo) {
        return true;
      }

      this.router.navigate(['/']);
      return false;
    } else if (route.data['userType'] === 'non-loged-in') {
      if (!userInfo) {
        return true;
      }

      this.router.navigate(['/']);
      return false;
    }

    this.router.navigate(['/']);
    return false;
  }
}
