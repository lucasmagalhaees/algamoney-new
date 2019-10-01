import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})


export class MenuComponent {



  constructor (private auth: AuthService){

  }
  @Output() eventoNavbar = new EventEmitter();

  items: MenuItem[];

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }
  ''


  ngOnInit() {
    const lancamentoItems = [
      {label: 'Pesquisar Lançamentos', icon: 'pi pi-fw pi-search', routerLink: '/lancamentos'},
      //..aqui os itens de lançamento independentes de permissão
    ];
    const pessoaItems = [
      {label: 'Pesquisar Pessoas', icon: 'pi pi-fw pi-search', routerLink: '/pessoas'},
    ];

    if (this.auth.temPermissao('ROLE_CADASTRAR_LANCAMENTO')) {
      lancamentoItems.push({
        label: 'Novo Lançamento',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/lancamentos/novo'
      });
    }
    if (this.auth.temPermissao('ROLE_CADASTRAR_PESSOA')) {
      pessoaItems.push({
        label: 'Nova Pessoa',
        icon: 'pi pi-fw pi-plus',
        routerLink: '/pessoas/novo'
      });
    }


      this.items = [
          {
              label: 'Lançamentos',
              icon: 'pi pi-fw pi-dollar',
              items: lancamentoItems
          }, {
            label: 'Pessoas',
            icon: 'pi pi-fw pi-users',
            items: pessoaItems
        },
     ];
  }
}



