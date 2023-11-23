import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile-tab',
  templateUrl: './profile-tab.component.html',
  styleUrls: ['./profile-tab.component.css']
})
export class ProfileTabComponent {

  @Input() user : any

   logout() : void {
    this.user.name = 'none'
    console.log("logout");   
  }

  constructor(){

  }
}
