import { Injectable } from '@angular/core';
import { AuthService } from '../app/seguranca/auth.service';
import { MenuItem } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private auth: AuthService) { }

  _items: MenuItem[];

  get items(): MenuItem[]  {

    if (!this._items) {
      this._items = this.composeMenu();
    }

    return this._items;
  }

  reset() {
    this._items = null;
  }

  composeMenu(): MenuItem[]  {

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

    return [{
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
