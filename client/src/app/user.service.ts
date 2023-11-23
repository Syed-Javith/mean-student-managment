import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  const url = 'http://localhost:5000/auth/login'

  constructor( private http : HttpClient) { }

  const LoginUser = (username : string , password : string) : Observable<any> {
    return this.http.post(this.url, { username , password })
  }
}
