import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import * as moment from 'moment';
import { Lancamento } from '../utils/model';


export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl = 'https://alga-basic.herokuapp.com/lancamentos';

  constructor(private httpClient: HttpClient) { }


  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());


    if (filtro.descricao) {
        params = params.set('descricao', filtro.descricao);
    }
    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
  }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
  }

    return this.httpClient.get(`${this.lancamentosUrl}?resumo`, { headers, params })
        .toPromise()
        // tslint:disable-next-line: no-string-literal
        .then(response => {
          const lancamentos = response['content']
          const resultado = {
            lancamentos,
            total: response['totalElements']
          };
          return resultado;
        });
}

excluir(codigo: number): Promise<void> {
  const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  return this.httpClient.delete(`${this.lancamentosUrl}/${codigo}`, {headers})
  .toPromise()
  .then(() => null);
}

adicionar(lancamento: Lancamento): Promise<Lancamento> {
  const headers = new HttpHeaders()
  .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
  .append('Content-Type', 'application/json');

  return this.httpClient.post(`${this.lancamentosUrl}`, lancamento, { headers })
    .toPromise()
    .then(response => response['content']);
}

atualizar(lancamento: Lancamento): Promise<Lancamento>{
  const headers = new HttpHeaders()
  .append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')
  .append('Content-Type', 'application/json');

  return this.httpClient.put(`${this.lancamentosUrl}/${lancamento.codigo}`, lancamento, { headers })
    .toPromise()
    .then(response => {
      const lancamentoAlterado = response as Lancamento;

      this.converterStringsParaDatas([lancamentoAlterado]);

      return lancamentoAlterado;
    });
}

buscarPorCodigo(codigo:number): Promise<Lancamento>{
  const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  return this.httpClient.get(`${this.lancamentosUrl}/${codigo}`, {headers})
  .toPromise()
  .then(response => {
    const lancamento = response as Lancamento;
    this.converterStringsParaDatas([lancamento]);
  return lancamento;
  });

}

private converterStringsParaDatas(lancamentos: Lancamento[]) {
  for (const lancamento of lancamentos) {
    lancamento.dataVencimento = moment(lancamento.dataVencimento,
      'YYYY-MM-DD').toDate();

    if (lancamento.dataPagamento) {
      lancamento.dataPagamento = moment(lancamento.dataPagamento,
        'YYYY-MM-DD').toDate();
    }
  }
}


}



