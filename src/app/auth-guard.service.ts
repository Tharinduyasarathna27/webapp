import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService , private route: Router) { }

  canActivate(Route , state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) { return true; }

    this.route.navigate(['/login'], {queryParams: {returnUrl: state.url}});
    return false;
    });
  }
}
