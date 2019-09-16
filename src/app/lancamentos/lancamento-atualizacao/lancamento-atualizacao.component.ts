import { Component, OnInit } from '@angular/core';
import { LancamentoService } from './../lancamento.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import {Lancamento} from './../../utils/model';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lancamento-atualizacao',
  templateUrl: './lancamento-atualizacao.component.html',
  styleUrls: ['./lancamento-atualizacao.component.css']
})
export class LancamentoAtualizacaoComponent implements OnInit {
  categorias = [];
  pessoas = [];
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];
  lancamento = new Lancamento();


  ngOnInit() {
    const codigoLancamento =this.route.snapshot.params['codigo'];
    this.carregarLancamentos(codigoLancamento);
    this.carregarCategorias();
    this.carregarPessoas();

  }

  constructor(
    private toasty: ToastyService,
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute){}

    carregarLancamentos(codigo:number) {
      return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamento = lancamento;
        console.log(lancamento);
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

    carregarPessoas() {
      return this.pessoaService.listarTodas()
      .then(pessoas => {
          this.pessoas = pessoas.map(c => {
            return { label: c.nome, value: c.codigo };
          });
      })
      .catch(erro => this.errorHandler.handle(erro));
    }
    carregarCategorias() {
      return this.categoriaService.listarTodas()
      .then(categorias => {
          this.categorias = categorias.map(c => {
            return { label: c.nome, value: c.codigo };
          });
      })
      .catch(erro => this.errorHandler.handle(erro));
    }

   }





