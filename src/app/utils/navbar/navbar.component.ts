import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthService) { }

  @Output() eventoNavbar = new EventEmitter();

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }

  criarNovoAccessToken() {
    this.auth.obterNovoAccessToken();
  }


}
