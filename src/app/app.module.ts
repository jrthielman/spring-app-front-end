import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { httpInterceptorProviders } from './auth/token-interceptor';
import { EmailVerificationComponent } from './emailverification/emailverification.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserformComponent } from './form/userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserComponent,
    EmailVerificationComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
