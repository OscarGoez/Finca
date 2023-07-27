import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Visitantes } from '../models/visitantes';
import { UserService } from '../services/user.services';
import { EmailService } from '../services/email.service';
import { catchError, switchMap } from 'rxjs/operators';
//import { FlexLayoutModule } from '@angular/flex-layout';
import { of } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  public user: Visitantes;
  public status: string = '';
  public emailStatus: string = '';
  public showResponse: boolean = false;
  public apiResponse: string = '';

  constructor(private _userService: UserService, private _emailService: EmailService) {
    this.user = new Visitantes('', '', '', '');
    this.status = 'pending';
  }

  onSubmit(form: NgForm) {
    console.log('Submit form'); // Verificar que se está ejecutando onSubmit

    this.status = 'true';
    this.showResponse = false;
    this._userService.saveUser(this.user).pipe(
      switchMap((response: any) => {
        if (response && response.success) {
          console.log('User saved'); // Verificar que se ha guardado el usuario

          return this._emailService.sendEmail(this.user).pipe(
            catchError((error) => {
              console.log(error);
              this.emailStatus = 'failed';
              return of(null);
            })
          );
        } else {
          this.status = 'failed';
          return of(null);
        }
      }),
      catchError((error) => {
        console.log(error);
        this.status = 'failed';
        return of(null);
      })
    ).subscribe((emailResponse: any) => {
      console.log('Email response:', emailResponse); // Verificar la respuesta del email

      if (emailResponse && emailResponse.success) {
        this.status = 'success';
        this.emailStatus = 'success';
      } else {
        this.status = 'failed';
        this.emailStatus = 'failed';
      }
      this.showResponse = true;
      console.log(this.status);
      this.apiResponse = this.status === 'success' ? 'El mensaje se envió con éxito' : 'Mensaje enviado';

      // Limpiar el formulario
      form.resetForm();
      this.user = new Visitantes('', '', '', '');
    });
  }
}

