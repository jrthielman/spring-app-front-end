import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserDetailsRequestModel } from 'src/objects/userdetailsrequestmodel';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {

  private errorCode: number;

  userForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(10)]],
    addresses: this.fb.array([this.createItem()])
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
  }

  createItem(){
    return this.fb.group({
      city: '',
      country: '',
      streetName: '',
      postalCode: '',
      type: ''
    })
  }

  onSubmit(){
    this.userService.createUser(this.userForm.value).subscribe(
      resp => console.log(resp),
      error => {
        this.errorCode = error.status;
      },
      () => this.errorCode = 200
    )
  }

  get firstName(){
   return this.userForm.get('firstName'); 
  }

  get lastName(){
   return this.userForm.get('lastName'); 
  }

  get email(){
   return this.userForm.get('email'); 
  }

  get password(){
   return this.userForm.get('password'); 
  }
  
}
