import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    userName: [""],
    password: [""]
  })

  loginPayLoad: any;


  constructor(private fb: FormBuilder, private router: Router, public authService: AuthService) { }

  handleLogin() {
    this.loginPayLoad = this.loginForm.value;
    this.loginForm.reset();
    this.authService.login(this.loginPayLoad);
  }

  ngOnInit(): void {
  }

}
