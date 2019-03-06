import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginRequest } from 'src/objects/loginRequest';
import { Router } from '@angular/router';
import { TokenService } from '../auth/token.service';
import { AuthenticateService } from '../auth/authenticate.service';
import { openError } from '../animation/error';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [openError]
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['MyNewEmail00', Validators.required],
    password: ['mypassword', Validators.required]
  });

  errorCode: number;

  constructor(private location: Location, private fb: FormBuilder,
    private loginService: LoginService, private route: Router,
    private tokenService: TokenService, private authenticate: AuthenticateService) { }

  ngOnInit() {
  }

  onSubmit(){
    let loginRequest = new LoginRequest;

    loginRequest.email = this.loginForm.value.email;
    loginRequest.password = this.loginForm.value.password;
    this.loginService.login(loginRequest)
    .subscribe(
      resp => this.tokenService.setToken(resp.headers.get("Authorization").slice(7)),
      error => this.errorCode = error.status,
      () => this.route.navigate(['/users'])
    )
  }

  removeError(){
    this.errorCode = 0;
  }

  logout(){
    this.tokenService.deleteToken();
  }

  isAuthenticated(){
    return this.authenticate.isAuthenticated();
  }

}
