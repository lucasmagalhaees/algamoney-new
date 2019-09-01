import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() eventoNavbar = new EventEmitter();

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }


}
