import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserRest } from 'src/objects/user-rest';
import { url } from '../url-contants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<UserRest[]>{
    return this.http.get<UserRest[]>(url + "users");
  }
}
