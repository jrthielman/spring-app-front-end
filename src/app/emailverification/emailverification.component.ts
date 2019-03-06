import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticateService } from '../auth/authenticate.service';
import { OperationStatusModel } from 'src/objects/operationstatusmodel';

@Component({
  selector: 'app-emailverification',
  templateUrl: './emailverification.component.html',
  styleUrls: ['./emailverification.component.css']
})
export class EmailVerificationComponent implements OnInit {

  token: string;
  verifiedCode: string;

  emailVerifyForm = this.fb.group({
    emailToken: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private route: ActivatedRoute,
    private authenticateService: AuthenticateService) { }

  ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token');
    if(!(this.token === 'nothing')){
      this.verifyToken();
    }
  }

  verifyToken(){
    this.authenticateService.verifyEmail(this.token).subscribe(
      resp => this.verifiedCode = resp.operationResult,
      error => this.verifiedCode = "ERROR",
      () => console.log("done!")
    )
  }

  onSubmit(){
    this.authenticateService.verifyEmail(this.emailVerifyForm.value.emailToken).subscribe(
      resp => this.verifiedCode = resp.operationResult,
      error => this.verifiedCode = "ERROR",
      () => console.log("done!")
    )
  }

}
