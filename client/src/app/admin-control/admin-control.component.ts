import { Component , OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-control',
  templateUrl: './admin-control.component.html',
  styleUrls: ['./admin-control.component.css']
})
export class AdminControlComponent {

  marks : any[]

  constructor(private adminService : AdminService){   
    this.marks = this.adminService.marksToPanel;
    console.log(this.marks);
    console.log(this.adminService.marksToPanel);
  }

  ngOnInit(): void {
    // Move your logic to ngOnInit
    this.marks = this.adminService.marksToPanel;
    console.log(this.marks);
  }
}
