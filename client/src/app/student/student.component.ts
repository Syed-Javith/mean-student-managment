import { Component, ViewChild } from '@angular/core';
import { ProfileTabComponent } from '../profile-tab/profile-tab.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {

  @ViewChild(ProfileTabComponent) profileTabComponent !: ProfileTabComponent

  user : any = {
    name : "Syed Javith R",
    gender : "M",
    mail : "syedjavith14@gmail.com",
  }

  marks = [{
    subject : "DAA",
    code : "CS19301",
    mark : 90
  },{
    subject : "DAA",
    code : "CS19301",
    mark : 90
  }]


}
