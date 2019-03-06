import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private token: string;

  constructor() { }

  getToken(){
    return this.token === undefined ? sessionStorage.getItem("AUTH_TOKEN") : this.token;
  }

  setToken(token: string){
    this.token = token;
    this.saveToken();
  }

  saveToken(){
    sessionStorage.setItem("AUTH_TOKEN", this.token);
  }

  deleteToken(){
    this.token = undefined;
    sessionStorage.removeItem("AUTH_TOKEN");
  }
}
