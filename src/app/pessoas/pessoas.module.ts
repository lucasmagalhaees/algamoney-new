import { ModMessageComponent } from './../utils/mod-message/mod-message.component';
import { ModToastComponent } from './../utils/mod-toast/mod-toast.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasPesquisaComponent } from './pessoas-pesquisa/pessoas-pesquisa.component';
import { PessoaCadastroComponent } from './pessoa-cadastro/pessoa-cadastro.component';
import { PessoaGridComponent } from './pessoa-grid/pessoa-grid.component';
import { MessagesModule} from 'primeng/primeng';
import {MessageModule} from 'primeng/message';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ToastModule,
    MessagesModule,
    MessageModule
  ],
  declarations: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent,
    PessoaGridComponent,
    ModToastComponent,
    ModMessageComponent
  ],
  exports: [
    PessoasPesquisaComponent,
    PessoaCadastroComponent
  ]

})
export class PessoasModule { }
