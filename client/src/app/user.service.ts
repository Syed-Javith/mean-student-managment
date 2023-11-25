import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:5000/auth/login'

  constructor( private http : HttpClient) { }

  LoginUser = (email : string , password : string) : Observable<any> => {
    return this.http.post(this.url, { email , password })
  }
}
