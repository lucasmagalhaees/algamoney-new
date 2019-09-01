import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

class Cliente {
  nome: string;
  email: string;
  profissao = '';
}

@Component({
  selector: 'app-validacao-form',
  templateUrl: './validacao-form.component.html',
  styleUrls: ['./validacao-form.component.css']
})
export class ValidacaoFormComponent {

  cliente = new Cliente();
  profissoes = ['Programador', 'Empresário', 'Outra'];



  salvar(form: NgForm) {
    console.log(this.cliente);

    form.reset({ primeiroNome: 'Sebastiao', profissao: 'Empresário'});
  }

}
