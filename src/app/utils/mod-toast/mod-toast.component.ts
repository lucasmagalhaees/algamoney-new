import { FormControl } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-mod-toast',
  template: `
  <p-toast position="top-left"></p-toast>
  `,
  styles: [
    `
    z-index: 9999;
  `
]
})
export class ModToastComponent implements OnInit {

  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;


  constructor(private messageService: MessageService) { }
  ngOnInit() {
    this.control.valueChanges.subscribe(x => {
      if (this.temErro()) {
        this.mostrarToast();
      }
    });
  }

  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }

  mostrarToast() {
    setTimeout(() => {
      this.messageService.add({
         severity: 'error',
         summary: this.error == "required" ? "Campo obrigatório" : "Tamanho insuficiente",
          detail: this.text,
          life: 8000,
      });
    });
  }

}
