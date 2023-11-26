import { Component, Input , OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-mark-tabel',
  templateUrl: './mark-tabel.component.html',
  styleUrls: ['./mark-tabel.component.css']
})
export class MarkTabelComponent {

  @Input() marks : any;


  loggedUser : any

  constructor(private adminService : AdminService , private cookie : CookieService) {
    console.log(this.marks);
    
  }

  ngOnInit(): void {
    this.marks = this.adminService.marksToPanel
    console.log(this.marks);
    this.loggedUser = JSON.parse(this.cookie.get('user'))
    console.log(this.cookie.get('user'));
    
    console.log(this.loggedUser);
    console.log(this.loggedUser?.isAmdin);
    
    
     
  }
}
