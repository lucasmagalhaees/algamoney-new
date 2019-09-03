import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'http://localhost:8080/lancamentos';

  constructor(private httpClient: HttpClient) { }

pesquisar(): Promise<any> {
  const headers = new HttpHeaders();
  headers.append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  return this.httpClient.get(`${this.lancamentosUrl}?resumo`, {headers})
  .toPromise()
  .then(response => response);
  // .then(response => response.json().content);
}

}


