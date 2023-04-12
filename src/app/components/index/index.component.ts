import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  public title:string;

  constructor(){
    this.title="GRANJA EL RETORNO";
  }
}
