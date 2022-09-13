import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = new BehaviorSubject(false);
  constructor(public router: Router) {
  }
  redirectUrl: string | null = null;

  login(payload: any): any {
    if (payload.userName == "thai" && payload.password == "thai") {
      this.isLoggedIn.next(true);
      this.redirectUrl = '/admin';
      this.router.navigate([this.redirectUrl]);
    }
  }

  logout(): any {
    this.isLoggedIn.next(false);
    this.redirectUrl = '/login';
    this.router.navigate([this.redirectUrl]);
  }
}
