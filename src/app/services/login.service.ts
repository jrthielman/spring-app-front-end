import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { LoginRequest } from 'src/objects/loginRequest';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
  observe: "response"
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<HttpResponse<any>>{
    return this.http.post<any>("http://localhost:8080/mobile-app-js/users/login", loginRequest, {observe: 'response'});
  }

}
