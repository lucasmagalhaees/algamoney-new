import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { RouterLink } from '@angular/router';
import { MenuService } from '../../../app/menu.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  constructor (private auth: AuthService,
               private menuService: MenuService) {}

  @Output() eventoNavbar = new EventEmitter();

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }

  ngOnInit() {
  }
}
