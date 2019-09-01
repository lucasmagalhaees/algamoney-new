import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-mod-message',
  template:
  `
    <p-message *ngIf="temErro()" severity="error" text="{{text}}"></p-message>

  `,
  styles: [
    `
    white-space: nowrap;
  `
]
})
export class ModMessageComponent {

  msgs: Message[] = [];


  @Input() error: string;
  @Input() control: FormControl;
  @Input() text: string;


  temErro(): boolean {
    return this.control.hasError(this.error) && this.control.dirty;
  }


}
