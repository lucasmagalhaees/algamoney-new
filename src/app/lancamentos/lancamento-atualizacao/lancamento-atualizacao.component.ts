import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { LancamentoService } from './../lancamento.service';
import { PessoaService } from './../../pessoas/pessoa.service';
import {Lancamento} from './../../utils/model';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-lancamento-atualizacao',
  templateUrl: './lancamento-atualizacao.component.html',
  styleUrls: ['./lancamento-atualizacao.component.css']
})
export class LancamentoAtualizacaoComponent implements OnInit {
  categorias = [];
  campos = [];
  pessoas = [];
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];
  lancamento = new Lancamento();
  lancamentoCopia = new Lancamento();



  ngOnInit() {
    const codigoLancamento =this.route.snapshot.params['codigo'];
    this.carregarLancamentos(codigoLancamento);
    this.carregarCategorias();
    this.carregarPessoas();
    this.title.setTitle("Atualizar Lançamento");

  }

  constructor(
    private toasty: ToastyService,
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
    private title: Title
    )
    {}

    carregarLancamentos(codigo:number) {

      return this.lancamentoService.buscarPorCodigo(codigo)
      .then(lancamento => {
        this.lancamentoCopia = JSON.parse(JSON.stringify(lancamento));
        this.lancamento = lancamento;
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

    atualizarLancamento(form: FormControl) {
      this.lancamentoService.atualizar(this.lancamento)
        .then(lancamento => {
          this.validarAlteracoes(lancamento);
          this.lancamento = lancamento;
          // this.toasty.success(`Lançamento alterado com sucesso!`);


          this.router.navigate(['/lancamentos']);


        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    validarAlteracoes(lancamento: Lancamento) {
      let campos: string[] = new Array();

      if (lancamento.descricao !== this.lancamentoCopia.descricao) {
          campos.push('Descrição');
      }
      if (moment(lancamento.dataPagamento).format('dd/MM/yyyy') !== moment(this.lancamentoCopia.dataPagamento).format('dd/MM/yyyy')) {
          campos.push('Data de Pagamento');
      }

      if (moment(lancamento.dataVencimento).format('dd/MM/yyyy') !== moment(this.lancamentoCopia.dataVencimento).format('dd/MM/yyyy')) {
          campos.push('Data de Vencimento');
      }
      if (lancamento.pessoa.codigo !== this.lancamentoCopia.pessoa.codigo) {
          campos.push('Pessoa');
      }
      if (lancamento.categoria.codigo !== this.lancamentoCopia.categoria.codigo) {
          campos.push('Categoria');
      }
      if (lancamento.valor !== this.lancamentoCopia.valor) {
          campos.push('Valor');
      }
      if (lancamento.observacao !== this.lancamentoCopia.observacao) {
        campos.push('Observacao');
      }
      //...
      // console.log(campos);
      this.toasty.success(`Alteração em ${campos.join(', ')}. ${this.lancamento.descricao} está atualizado com sucesso.`);
  }

    novo(form: FormControl){
      this.router.navigate(['lancamentos/novo']);
    }

   }





