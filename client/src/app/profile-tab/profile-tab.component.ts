import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

  @Input() student : any

   logout() : void {
    this.student.name = 'none'
    console.log("logout");   
  }

  constructor(){

  }
}
