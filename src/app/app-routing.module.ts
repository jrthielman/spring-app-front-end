import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';
import { EmailVerificationComponent } from './emailverification/emailverification.component';
import { UserformComponent } from './form/userform/userform.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'verify_email/:token', component: EmailVerificationComponent},
  {path: 'register', component: UserformComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
