import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Visitantes } from '../models/visitantes';

@Injectable()
export class EmailService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = 'http://localhost:3000/api/send-email'; 
  }

  sendEmail(user: Visitantes): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    let body = JSON.stringify(user);
    console.log('Request body:', body);
    return this.http.post(this.url, body, { headers: headers });
    
  }
}
