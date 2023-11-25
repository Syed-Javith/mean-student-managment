import { Component, ViewChild } from '@angular/core';
import { ProfileTabComponent } from '../profile-tab/profile-tab.component';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @ViewChild(ProfileTabComponent) profileTabComponent !: ProfileTabComponent

  user : any 

  marks : [any]

  constructor(private cookie : CookieService){
    this.user = JSON.parse(this.cookie.get('user'))
    this.marks = this.user?.marks;
  }

}
