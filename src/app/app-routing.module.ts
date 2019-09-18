import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './utils/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasAtualizacaoComponent } from './pessoas/pessoas-atualizacao/pessoas-atualizacao.component';
import { LancamentoAtualizacaoComponent } from './lancamentos/lancamento-atualizacao/lancamento-atualizacao.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  { path: 'lancamentos/atualiza/:codigo', component: LancamentoAtualizacaoComponent },
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/atualiza/:codigo', component: PessoasAtualizacaoComponent },
  { path: 'pessoas/:codigo', component: PessoaCadastroComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent },
  { path: 'page-not-found', component: PaginaNaoEncontradaComponent},
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({

  imports: [
    RouterModule.forRoot(routes)
    ],
    exports: [
      RouterModule
    ]
  })

export class AppRoutingModule { }
