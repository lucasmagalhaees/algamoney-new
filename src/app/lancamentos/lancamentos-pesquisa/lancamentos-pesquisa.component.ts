import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lancamentos-pesquisa',
  templateUrl: './lancamentos-pesquisa.component.html',
  styleUrls: ['./lancamentos-pesquisa.component.css']
})
export class LancamentosPesquisaComponent {

  descricao: string;
  lancamentos = [];


  ngOnInit() {
    this.pesquisar();
  }

  constructor(private lancamentoService: LancamentoService) {}

  pesquisar() {
    this.lancamentoService.pesquisar({descricao: this.descricao})
      .then( lancamentos => this.lancamentos = lancamentos );
  }
}
