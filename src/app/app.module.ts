import { LancamentoService } from './lancamentos/lancamento.service';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { ModMessageComponent } from './utils/mod-message/mod-message.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import {ButtonModule} from 'primeng/components/button/button';
import {TableModule} from 'primeng/components/table/table';
import {TooltipModule} from 'primeng/components/tooltip/tooltip';
import {CalendarModule} from 'primeng/components/calendar/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { LancamentosPesquisaComponent } from './lancamentos/lancamentos-pesquisa/lancamentos-pesquisa.component';
import { NavbarComponent } from './utils/navbar/navbar.component';
import { SidebarComponent } from './utils/sidebar/sidebar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MenuComponent } from './utils/menu/menu.component';
import { PessoasPesquisaComponent } from './pessoas/pessoas-pesquisa/pessoas-pesquisa.component';
import { FormsModule } from '@angular/forms';
import { LancamentoCadastroComponent } from './lancamentos/lancamento-cadastro/lancamento-cadastro.component';
import { InputTextareaModule } from 'primeng/components/inputtextarea/inputtextarea';
import {SelectButtonModule} from 'primeng/components/selectbutton/selectbutton';
import { PessoaCadastroComponent } from './pessoas/pessoa-cadastro/pessoa-cadastro.component';
import {InputMaskModule} from 'primeng/components/inputmask/inputmask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { ValidacaoFormComponent } from './utils/validacao-form/validacao-form.component';
import { MessageComponent } from './utils/message/message.component';
import { PessoaGridComponent } from './pessoas/pessoa-grid/pessoa-grid.component';
import { ModToastComponent } from './utils/mod-toast/mod-toast.component';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {PanelMenuModule} from 'primeng/panelmenu';



@NgModule({
  declarations: [
    AppComponent,
    LancamentosPesquisaComponent,
    NavbarComponent,
    SidebarComponent,
    MenuComponent,
    PessoasPesquisaComponent,
    LancamentoCadastroComponent,
    PessoaCadastroComponent,
    ValidacaoFormComponent,
    MessageComponent,
    PessoaGridComponent,
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
    HttpClientModule
    ],
  providers: [
    MessageService,
    LancamentoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
