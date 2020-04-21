import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { BasicAuthService } from './basic-auth.service';

@Injectable({
  providedIn: 'root'
})

export class RouteGuardAuthService implements CanActivate {

  username: string
  constructor(private authService: BasicAuthService, private router: Router) { }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.isUserLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['login']);
      return false;

    }

  }


}
