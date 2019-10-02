import { ErrorHandlerService } from 'src/app/utils/error-handler.service';
import { AuthService } from './../../seguranca/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { Router } from '@angular/router';
import { MenuService } from '../../../app/menu.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent {

  constructor (private auth: AuthService,
               private menuService: MenuService,
               private errorHandler: ErrorHandlerService,
               private router: Router
               ) {}

  @Output() eventoNavbar = new EventEmitter();

  menuState: any;

  toggleMenu() {
    this.eventoNavbar.emit(this.menuState);
  }

  logout(){
    this.auth.logout()
      .then(()=>{
          this.router.navigate(['/login']);
      })
      .catch(erro=> this.errorHandler.handle(erro));
  }

  ngOnInit() {
  }
}
