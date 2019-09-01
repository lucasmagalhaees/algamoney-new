import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  template: `
  <div id="main-header">
  <div class="header-content">
    <div>
       <h2>Nova Pessoa</h2>
    </div>

    <div>

    </div>
  </div>
</div>
  `,
  styles: [`
  #main-header {
    padding: 10px 0;
    background-color: #93c3db;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 9998;
    height: 72px;
    color: white;
    margin-top:70px;
  }


  #main-header .header-content{
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    height: 72px;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

  }
  .header-content h2{
    position: relative;
    top: -3px;
  }

  `]
})
export class BreadcrumbComponent {

  @Input() text: string;


}
