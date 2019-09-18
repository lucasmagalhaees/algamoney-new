import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { trigger, state, style, transition, animate} from '@angular/animations';
import { NgForm } from '@angular/forms';
import { ToastyConfig } from 'ng2-toasty';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class AppComponent {

  constructor(
    private toastyConfig: ToastyConfig,
    private router:Router) {
    this.toastyConfig.theme = 'bootstrap';
    this.toastyConfig.timeout = 8000;
  }

  menuState: string = 'out';
  adicionaEvento(menuState) {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';

  }

  exibindoNavbar(){
    return this.router.url !== '/login';
  }
  escondeNavbar(){
    return this.router.url === '/page-not-found';
  }





}

