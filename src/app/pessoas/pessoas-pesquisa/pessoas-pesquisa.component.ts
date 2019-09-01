import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG',
      status: 'Ativo'},
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP',
      status: 'Inativo'},
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC',
      status: 'Ativo'},
    { nome: 'Tamires Sandra', cidade: 'Niterói', estado: 'RJ',
      status: 'Ativo'},
    { nome: 'Marciel Carlos', cidade: 'Vitória', estado: 'ES',
      status: 'Inativo'},
    { nome: 'Emerson Silva', cidade: 'Cuiabá', estado: 'MS',
      status: 'Ativo'},
    { nome: 'Ricardo Goulart', cidade: 'Belo Horizonte', estado: 'MG',
      status: 'Inativo'},

  ];



}
