import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import { UserComponent } from './user/user.component';
import { EmailVerificationComponent } from './emailverification/emailverification.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserComponent},
  {path: 'verify_email/:token', component: EmailVerificationComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
