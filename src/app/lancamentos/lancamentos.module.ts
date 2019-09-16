import { RouterModule } from '@angular/router';
import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { LancamentoAtualizacaoComponent } from './lancamento-atualizacao/lancamento-atualizacao.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations:
  [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentoAtualizacaoComponent,
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]

})
export class LancamentosModule { }
