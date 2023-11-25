import { Component } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isLoading : boolean = false;

  changed(element : NgModel){
    console.log(element);
    
  }
  formChange(form : NgForm){
    console.log(form);
    
  }

  login(form : NgForm) {
    this.isLoading = true
    console.log(form);
    console.log(form.controls['username'].value);
    // console.log(form.controls['password'].value);
    const username = form.controls['username'].value
    const password = form.controls['password'].value
    
    
    this.userService.LoginUser(username,password).subscribe(
      (res) => {
        console.log(res);
        this.isLoading = false
        if(res?.token){
          this.cookie.set('token',res?.token)
          this.cookie.set('user',JSON.stringify(res?.user))
          if(res?.user?.isAdmin === true){
            // console.log(this.cookie.get('user'));
          this.router.navigate(['/admin'])
          }else{
            this.router.navigate(['/student'])
          }
        }
      },
      (err) => {
        console.log(err);
        this.isLoading = false
      },
      
    )
  }

  constructor(private cookie : CookieService ,private userService : UserService , private router : Router){

  }

}
