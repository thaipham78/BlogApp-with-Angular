import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  status: any;
  constructor(private authService: AuthService, private router: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): true | UrlTree {
    const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: any): any {
    let status;
    this.authService.isLoggedIn.subscribe(data => {
      if (data) {
        status=data;
      }
      if (!data) {
        this.authService.redirectUrl = url;
        status=this.router.parseUrl('/login')
        // this.status = data
      }
    })
    return status;
  }
}
