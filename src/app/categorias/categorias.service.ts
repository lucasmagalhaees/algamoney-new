import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable({

  providedIn: 'root'
})
export class CategoriasService {

  categoriasUrl = 'https://alga-basic.herokuapp.com/categorias';


  constructor(private httpClient: HttpClient) { }

  listarTodas(): Promise<any>{
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    return this.httpClient.get(this.categoriasUrl, {headers})
      .toPromise()
      .then(response => response);
  }
}
