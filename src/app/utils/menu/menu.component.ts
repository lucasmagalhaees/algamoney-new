import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() eventoNavbar = new EventEmitter();

  items: MenuItem[];

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }
  ''
  ngOnInit() {
      this.items = [
          {
              label: 'Lançamentos',
              icon: 'pi pi-fw pi-dollar',
              items: [
                  // tslint:disable-next-line: max-line-length
                  {label: 'Pesquisar Lançamentos', icon: 'pi pi-fw pi-search', routerLink: '/lancamentos'},
                  {label: 'Novo Lançamento', icon: 'pi pi-fw pi-plus', routerLink: '/lancamentos/novo'},
              ]
          }, {
            label: 'Pessoas',
            icon: 'pi pi-fw pi-users',
            items: [
              {label: 'Pesquisar Pessoas', icon: 'pi pi-fw pi-search', routerLink: '/pessoas'},
                {label: 'Nova Pessoa', icon: 'pi pi-fw pi-user-plus', routerLink: '/pessoas/novo'},
            ]
        },
     ];
  }
}



