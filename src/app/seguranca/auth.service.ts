import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { access } from 'fs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthUrl = 'https://alga-basic.herokuapp.com/oauth/token';
  jwtPayload: any;


  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService

  ) { }

  login(usuario: string, senha: string): Promise<void>{
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyMTIz');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthUrl, body, { headers })
    .toPromise()
    .then(response => {
      console.log(response);
      this.armazenarToken(response);
    })
    .catch(response => {
      console.log(response);
    });
  }

  private armazenarToken(token: string){
    this.jwtPayload = this.jwt.decodeToken(token);
  }
}
