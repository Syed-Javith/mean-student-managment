import { Component, Input, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProfileTabComponent } from '../profile-tab/profile-tab.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild(ProfileTabComponent) profileTabComponent !: ProfileTabComponent

  user = JSON.parse(this.cookie.get('user'));

  constructor(private cookie : CookieService , private router : Router){
    this.user = JSON.parse(this.cookie.get('user')) 
    console.log( this.cookie.get('user'));
    console.log(this.cookie.get('token'));
    if(!this.user?.isAdmin){
      this.router.navigate(['/'])
    }
  }
}
