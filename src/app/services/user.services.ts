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
        this.url =Global.url
    }
    testService(){
        return 'Test service Angular'
    }

    saveUser(user:Visitantes):Observable<any>{
        let params = JSON.stringify(user);
        let header = new HttpHeaders().set('content-type','application/json')
        return this._http.post(this.url+'save-user',params,{headers:header})
    }
}