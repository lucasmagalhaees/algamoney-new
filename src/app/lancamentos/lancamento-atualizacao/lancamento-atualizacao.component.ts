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
          const lancamentoCopia = Object.assign({}, this.lancamento);
          this.validarAlteracoes(lancamentoCopia);
          this.lancamento = lancamento;
          this.toasty.success(`Lançamento alterado com sucesso!`);


          this.router.navigate(['/lancamentos']);


        })
        .catch(erro => this.errorHandler.handle(erro));
    }

    validarAlteracoes(lancamentoCopia: Lancamento) {
      let campos: string[] = new Array();


      if (this.lancamento.descricao !== lancamentoCopia.descricao) {
          campos.push('descricao');
      }
      if (this.lancamento.dataPagamento !== lancamentoCopia.dataPagamento) {
          campos.push('dataPagamento');
      }

      if (this.lancamento.dataVencimento !== lancamentoCopia.dataVencimento) {
          campos.push('dataVencimento');
      }
      if (this.lancamento.pessoa !== lancamentoCopia.pessoa) {
          campos.push('pessoa');
      }
      if (this.lancamento.categoria !== lancamentoCopia.categoria) {
          campos.push('categoria');
      }
      if (this.lancamento.valor !== lancamentoCopia.valor) {
          campos.push('valor');
      }

      //...
      // console.log(campos);
      this.toasty.success(`Os campos ${campos.join(',')} foram alterados e o lançamento ${this.lancamento.descricao} foi atualizado com sucesso.`);
  }

    novo(form: FormControl){
      this.router.navigate(['lancamentos/novo']);
    }

   }





