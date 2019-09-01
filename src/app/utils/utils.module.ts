import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ValidacaoFormComponent } from './validacao-form/validacao-form.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MessageComponent } from './message/message.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModToastComponent } from './mod-toast/mod-toast.component';
import { ModMessageComponent } from './mod-message/mod-message.component';




@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    MenuComponent,
    MessageComponent,
    NavbarComponent,
    SidebarComponent,
    ValidacaoFormComponent,
    ModToastComponent,
    ToastModule,
    ModMessageComponent

  ],
  exports: [
  MenuComponent,
  MessageComponent,
  NavbarComponent,
  SidebarComponent,
  ValidacaoFormComponent,


  ],
  providers: [
    MessageService
  ]
})
export class UtilsModule { }
