import { Injectable } from '@angular/core';
import { HttpClient,HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'https://alga-basic.herokuapp.com/lancamentos';

  constructor(private httpClient: HttpClient) { }


  // httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }


  pesquisar(filtro: any): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();

    if (filtro.descricao) {
        params = params.set('descricao', filtro.descricao);
    }

    return this.httpClient.get(`${this.lancamentosUrl}?resumo`, { headers, params })
        .toPromise()
        // tslint:disable-next-line: no-string-literal
        .then(response => response['content']);
}


}



