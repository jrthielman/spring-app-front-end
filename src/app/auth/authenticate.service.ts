import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { HttpClient } from '@angular/common/http';
import { OperationStatusModel } from 'src/objects/operationstatusmodel';
import { Observable } from 'rxjs';
import { url } from '../url-contants';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private tokenService: TokenService, private http: HttpClient) { }

  verifyEmail(emailToken: string): Observable<OperationStatusModel>{
    return this.http.get<OperationStatusModel>(url + `users/email-verification?token=${emailToken}`);
  }

  isAuthenticated(){
    return this.tokenService.getToken() != undefined ? true : false;
  }
}
