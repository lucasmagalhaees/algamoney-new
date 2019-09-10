import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  nome: string;
}


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoasUrl = 'https://alga-basic.herokuapp.com/pessoas';

  constructor(private httpClient: HttpClient) { }

  pesquisar(filtro: PessoaFiltro): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');


    let params = new HttpParams();
    if (filtro.nome) {
      params = params.set('nome', filtro.nome);
  }

    return this.httpClient.get(`${this.pessoasUrl}`, { headers, params })
    .toPromise()
    // tslint:disable-next-line: no-string-literal
    .then(response => response);

  }
}
