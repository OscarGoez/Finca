import { Component } from '@angular/core';
import { Visitantes } from '../models/visitantes';
import { UserService } from '../services/user.services';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent {
  public user: Visitantes;

  constructor(
    private _userService: UserService
  ){
    this.user = new Visitantes('','','',0,'','');
  }
  onSubmit(Form:any){
    console.log(this.user)
    this._userService.saveUser(this.user).subscribe(
      reponse=>{
        console.log(reponse)
      },
      error =>{
        console.log(<any>error);
      }      
    )
  }
}
