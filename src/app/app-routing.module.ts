import { NaoAutorizadoComponent } from './utils/nao-autorizado/nao-autorizado.component';
import { AuthGuard } from './seguranca/auth.guard';
import { LoginFormComponent } from './seguranca/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './utils/pagina-nao-encontrada/pagina-nao-encontrada.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { PessoasAtualizacaoComponent } from './pessoas/pessoas-atualizacao/pessoas-atualizacao.component';
import { LancamentoAtualizacaoComponent } from './lancamentos/lancamento-atualizacao/lancamento-atualizacao.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { Routes, RouterModule, CanActivate } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent },
  { path: 'lancamentos/atualiza/:codigo', component: LancamentoAtualizacaoComponent,  canActivate: [AuthGuard], data: {roles: ['ROLE_CADASTRAR_LANCAMENTO']} },
  { path: 'lancamentos', component: LancamentosPesquisaComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_PESQUISAR_LANCAMENTO']} },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_CADASTRAR_LANCAMENTO']} },
  { path: 'pessoas', component: PessoasPesquisaComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_PESQUISAR_PESSOA']} },
  { path: 'pessoas/atualiza/:codigo', component: PessoasAtualizacaoComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_CADASTRAR_PESSOA']} },
  { path: 'pessoas/novo', component: PessoaCadastroComponent, canActivate: [AuthGuard], data: {roles: ['ROLE_CADASTRAR_PESSOA']} },
  { path: 'nao-autorizado', component: NaoAutorizadoComponent },
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
