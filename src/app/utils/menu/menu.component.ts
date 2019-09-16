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
                  {label: 'Novo Lançamento', icon: 'pi pi-fw pi-plus', routerLink: '/lancamentos/novo'},
                  {label: 'Pesquisar Lançamentos', icon: 'pi pi-fw pi-search', routerLink: '/lancamentos'}
              ]
          }, {
            label: 'Pessoas',
            icon: 'pi pi-fw pi-users',
            items: [
                {label: 'Nova Pessoa', icon: 'pi pi-fw pi-plus', routerLink: '/pessoas/novo'},
                {label: 'Pesquisar Pessoas', icon: 'pi pi-fw pi-search', routerLink: '/pessoas'}
            ]
        },
     ];
  }
}



