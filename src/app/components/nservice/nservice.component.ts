import { Component } from '@angular/core';

@Component({
  selector: 'app-nservice',
  templateUrl: './nservice.component.html',
  styleUrls: ['./nservice.component.css']
})
export class NserviceComponent {
  public title:string;

  constructor(){
    this.title="GRANJA EL RETORNO";
  }
}
