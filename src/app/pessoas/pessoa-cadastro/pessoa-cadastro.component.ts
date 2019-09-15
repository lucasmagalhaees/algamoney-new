import { FormControl } from '@angular/forms';
import { PessoaService } from './../../pessoas/pessoa.service';
import {Lancamento, Pessoa} from './../../utils/model';
import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { CategoriasService } from './../../categorias/categorias.service';
import { Component, OnInit } from '@angular/core';
import { ToastyService } from 'ng2-toasty';


@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})


export class PessoaCadastroComponent {

  constructor(
    private toasty: ToastyService,
    private categoriaService: CategoriasService,
    private errorHandler: ErrorHandlerService,
    private pessoaService: PessoaService,
  ) { }

  pessoa = new Pessoa();

  salvar(form: FormControl) {
    this.pessoaService.adicionar(this.pessoa)
      .then(() => {
        this.toasty.success(`Pessoa ${this.pessoa.nome} adicionada com sucesso!`);

        form.reset();
        this.pessoa = new Pessoa();
      })
      .catch(erro => this.errorHandler.handle(erro));
  }
  // console.log(this.pessoa);
  // }

}
