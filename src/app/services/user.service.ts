import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRest } from 'src/objects/user-rest';
import { url } from '../url-contants';
import { UserDetailsRequestModel } from 'src/objects/userdetailsrequestmodel';
import { Address } from 'src/objects/Address';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserRest[]>{
    return this.http.get<UserRest[]>(url + "users");
  }

  createUser(userDetails: UserDetailsRequestModel){
    return this.http.post(url + "users", userDetails);
  }
}
