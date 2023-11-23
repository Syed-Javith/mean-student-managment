import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  @Input() user = {
    name : "Syed Javith R",
    gender : "M",
    mail : "syedjavith14@gmail.com"
  }
}
