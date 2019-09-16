import { NgModule, Component, LOCALE_ID} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DecimalPipe, DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { Routes, RouterModule } from '@angular/router';



import { MessageService, ConfirmationService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/components/table/table';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelMenuModule} from 'primeng/panelmenu';
import {ToastyModule} from 'ng2-toasty';

import { LancamentoAtualizacaoComponent } from './lancamentos/lancamento-atualizacao/lancamento-atualizacao.component';
import { LancamentoService } from './lancamentos/lancamento.service';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { ModMessageComponent } from './utils/mod-message/mod-message.component';
import { PessoaService } from './pessoas/pessoa.service';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { MenuComponent } from './utils/menu/menu.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import { ValidacaoFormComponent } from './utils/validacao-form/validacao-form.component';
import { MessageComponent } from './utils/message/message.component';
import { ModToastComponent } from './utils/mod-toast/mod-toast.component';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

registerLocaleData(localePt);


const routes: Routes = [
  { path: '', redirectTo: 'lancamentos', pathMatch: 'full'},
  { path: 'lancamentos/atualiza/:codigo', component: LancamentoAtualizacaoComponent },
  { path: 'lancamentos', component: LancamentosPesquisaComponent },
  { path: 'lancamentos/novo', component: LancamentoCadastroComponent },
  { path: 'pessoas', component: PessoasPesquisaComponent },
  { path: 'pessoas/:codigo', component: PessoaCadastroComponent },
  { path: 'pessoas/novo', component: PessoaCadastroComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    LancamentoAtualizacaoComponent,
    PessoaCadastroComponent,
    ValidacaoFormComponent,
    MessageComponent,
    ModToastComponent,
    ModMessageComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    InputMaskModule,
    CurrencyMaskModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    PanelMenuModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(routes),

    ],
  providers: [
    MessageService,
    LancamentoService,
    PessoaService,
    ConfirmationService,
    DecimalPipe,
    DatePipe,
  { provide: LOCALE_ID, useValue: 'pt-BR' }

],
  bootstrap: [AppComponent]
})
export class AppModule { }
