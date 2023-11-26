import { Component, Input, ViewChild } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ProfileTabComponent } from '../profile-tab/profile-tab.component';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminactionService } from '../adminaction.service';
import { AdminControlComponent } from '../admin-control/admin-control.component';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  @ViewChild(ProfileTabComponent) profileTabComponent !: ProfileTabComponent

  @ViewChild(AdminControlComponent) adminControlComponent !: AdminControlComponent
  user = JSON.parse(this.cookie.get('user'));

  isStudentModal : boolean = false

  toggleStudentModal() {
    this.isStudentModal = !this.isStudentModal
  }

  getStudent(form : NgForm) {
    const rollNumber = form.controls['rollNumber'].value
    const department = form.controls['department'].value
    const year = form.controls['year'].value

    this.adminActionService.getStudentByDetails(rollNumber,department,year).subscribe(
      (result) => {
        console.log(result);
        if(result?._id){
          this.adminService.marksToPanel = result?.marks
          console.log(this.adminService.marksToPanel);
          console.log(this.adminService.marksToPanel.length);  
          this.router.navigate(['/admin/control'])  
        }
      },
      (err) => {
        console.log(err);
        
      }
    )
  }

  constructor(private cookie : CookieService , private router : Router, private adminActionService : AdminactionService , private adminService : AdminService){
    this.user = JSON.parse(this.cookie.get('user')) 
    console.log( this.cookie.get('user'));
    console.log(this.cookie.get('token'));
    if(!this.user?.isAdmin){
      this.router.navigate(['/'])
    }
  }
}
