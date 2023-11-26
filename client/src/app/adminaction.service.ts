import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminactionService {

  url = 'http://localhost:5000/student'
  adminUrl = 'http://localhost:5000/admin'
  token = this.cookie.get('token')
  header = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Authorization' : `Bearer ${this.token}`
  })
  options = {
    headers : this.header
  }

  constructor(private http : HttpClient, private cookie : CookieService) { }

  getStudentById(userid:string) : Observable<any> {
    return this.http.get(`${this.url}/${userid}`)
  }

  getStudentByDetails(rollNumber : number , department : string , year : number) : Observable<any>{
    return this.http.post(`${this.adminUrl}/getstudent`,{ rollNumber , department , year } , this.options)
  }
}
