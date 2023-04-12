import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public title:string;

  constructor(){
    this.title="GRANJA EL RETORNO";
  }
}
