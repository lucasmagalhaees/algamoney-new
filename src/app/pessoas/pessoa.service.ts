import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'https://alga-basic.herokuapp.com/pessoas';

  constructor(private httpClient: HttpClient) { }

  pesquisar(): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.get(`${this.pessoasUrl}`, { headers})
    .toPromise()
    // tslint:disable-next-line: no-string-literal
    .then(response => response['content']);

  }
}
