import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

  @Input() user : any

   logout() : void {
     this.cookie.delete('token')
     this.cookie.delete('user')
     this.user = null
    this.router.navigate(['/'])
  }

  constructor(private cookie : CookieService , private router : Router){

  }
}
