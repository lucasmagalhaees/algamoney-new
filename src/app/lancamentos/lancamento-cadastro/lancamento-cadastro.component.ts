import { LancamentoService } from './../lancamento.service';
import { FormControl } from '@angular/forms';
import { PessoaService } from './../../pessoas/pessoa.service';
import {Lancamento} from './../../utils/model';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {
  categorias = [];
  pessoas = [];
  tipos = [
    { label: 'Receita', value: 'RECEITA' },
    { label: 'Despesa', value: 'DESPESA' }
  ];


  lancamento = new Lancamento();

  constructor(
    private toasty: ToastyService,
    private lancamentoService: LancamentoService,
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
  ) { }

  ngOnInit() {
    this.carregarCategorias();
    this.carregarPessoas();
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

  carregarPessoas() {
    return this.pessoaService.listarTodas()
    .then(pessoas => {
        this.pessoas = pessoas.map(c => {
          return { label: c.nome, value: c.codigo };
        });
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  salvar(form: FormControl) {
  //   this.lancamentoService.adicionar(this.lancamento)
  //     .then(() => {
  //       this.toasty.success('Lançamento adicionado com sucesso!');

  //       form.reset();
  //       this.lancamento = new Lancamento();
  //     })
  //     .catch(erro => this.errorHandler.handle(erro));
  // }
  console.log(this.lancamento);
  }

}
