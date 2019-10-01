import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import {JwtHelperService} from '@auth0/angular-jwt';
import { JwtModule } from "@auth0/angular-jwt";




@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    JwtHelperService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MoneyHttpInterceptor,
      multi: true
  }


  ]
})
export class SegurancaModule { }
