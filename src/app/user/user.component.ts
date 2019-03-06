import { Component, OnInit } from '@angular/core';
import { UserRest } from 'src/objects/user-rest';
import { UserService } from '../services/user.service';
import { AuthenticateService } from '../auth/authenticate.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public users: UserRest[];

  constructor(private userService: UserService, private authenticate: AuthenticateService) { }

  ngOnInit() {
    if(this.isAuthenticated()){
      this.userService.getUsers()
    .subscribe(users => this.users = users);
    }
  }

  isAuthenticated(){
    return this.authenticate.isAuthenticated();
  }

  refreshList(){
    this.userService.getUsers()
    .subscribe(users => this.users = users);
  }

}
