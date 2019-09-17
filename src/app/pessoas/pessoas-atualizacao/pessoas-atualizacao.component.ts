import { FormControl } from '@angular/forms';
import { PessoaService } from './../../pessoas/pessoa.service';
import {Lancamento, Pessoa} from './../../utils/model';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-atualizacao',
  templateUrl: './pessoas-atualizacao.component.html',
  styleUrls: ['./pessoas-atualizacao.component.css']
})
export class PessoasAtualizacaoComponent implements OnInit {

  constructor(
    private toasty: ToastyService,
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  pessoa = new Pessoa();

  ngOnInit() {
    const codigoPessoa =this.route.snapshot.params['codigo'];
    this.carregarPessoas(codigoPessoa);
  }

  carregarPessoas(codigo:number) {
    return this.pessoaService.buscarPorCodigo(codigo)
    .then(pessoa => {
      this.pessoa = pessoa;
      console.log(pessoa);
    })
    .catch(erro => this.errorHandler.handle(erro));
  }

  atualizarPessoa(form: FormControl) {
    this.pessoaService.atualizar(this.pessoa)
      .then(pessoa => {
        this.pessoa = pessoa;

        this.toasty.success(`Pessoa alterada com sucesso!`);
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  novo(form: FormControl){
    this.router.navigate(['pessoas/novo']);
  }

}
