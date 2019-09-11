import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

export class PessoaFiltro {
  nome: string;
  pagina = 0;
  itensPorPagina = 4;
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

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    return this.httpClient.get(`${this.pessoasUrl}`, { headers, params })
    .toPromise()
    // tslint:disable-next-line: no-string-literal
    .then(response => {
      const pessoas = response['content']
      const resultado = {
        pessoas,
        total: response['totalElements']
      };
      return resultado;
    });

  }

  listarTodas(): Promise<any>{
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.httpClient.get(this.pessoasUrl, {headers})
      .toPromise()
      .then(response => response);
  }

  excluir(codigo: number): Promise<void> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    return this.httpClient.delete(`${this.pessoasUrl}/${codigo}`, {headers})
    .toPromise()
    .then(() => null);
  }

  mudarStatus(codigo: number, ativo: boolean): Promise<void> {
    const headers = new Headers();
    headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    headers.append('Content-Type', 'application/json');
    return this.httpClient.put(`${this.pessoasUrl}/${codigo}/ativo`, { headers })
    .toPromise()
    .then(() => null);
  }
}
