import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  oauthUrl = 'https://alga-basic.herokuapp.com/oauth/token';
  jwtPayload: any;


  constructor(
    private http: HttpClient,
    private jwt: JwtHelperService

  ) {
    this.carregarToken();
  }

  temPermissao(permissao: string){
    return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
  }

  login(usuario: string, senha: string): Promise<void>{
    const headers = new HttpHeaders()
    .append('Content-Type', 'application/x-www-form-urlencoded')
    .append('Authorization', 'Basic YW5ndWxhcjphbmd1bGFyMTIz');
    const body = `username=${usuario}&password=${senha}&grant_type=password`;

    return this.http.post(this.oauthUrl, body, { headers })
    .toPromise()
    .then(response => {
      console.log(response);
      this.armazenarToken(response['access_token']);
    })
    .catch(response => {
      const responseError = response.error;
      if (response.status === 400) {
        if (responseError.error === 'invalid_grant') {
          return Promise.reject('Usuário ou senha inválida');
        }
      }
      return Promise.reject(response);
  });
  }

  obterNovoAccessToken(): Promise<void> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic YW5ndWxhcjpAbmd1bEByMA==');

    const body = 'grant_type=refresh_token';

    return this.http.post(this.oauthUrl, body,
        { headers, withCredentials: true })
      .toPromise()
      .then(response => {
        this.armazenarToken(response['access_token']);

        console.log('Novo access token criado!');

        return Promise.resolve(null);
      })
      .catch(response => {
        console.error('Erro ao renovar token.', response);
        return Promise.resolve(null);
      });
  }

  private armazenarToken(token: string){
    this.jwtPayload = this.jwt.decodeToken(token);
    localStorage.setItem('token', token);
  }

  isAccessTokenInvalido() {
    const token = localStorage.getItem('token');

    return !token || this.jwt.isTokenExpired(token);
  }


  private carregarToken(){
    const token = localStorage.getItem('token');

    if(token){
      this.armazenarToken(token);
    }
  }
}
