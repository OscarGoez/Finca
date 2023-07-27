import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Visitantes } from '../models/visitantes';
import { Global } from './global';


@Injectable()
export class UserService{
    public url:string;
    constructor(
        private _http: HttpClient
    ){
        this.url = 'http://localhost:3000/api/send-email';//this.url =Global.url+'contactsmail';
    }
    testService(){
        return 'Test service Angular'
    }

    saveUser(user: Visitantes): Observable<any>{
        let params = JSON.stringify(user);
        let header = new HttpHeaders().set('content-type', 'application/json');
        console.log('Request body:', params);
        return this._http.post(this.url, params, {headers:header});
    }
}