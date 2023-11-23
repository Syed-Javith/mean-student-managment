import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { AdminComponent } from './admin/admin.component';
import { AdminControlComponent } from './admin-control/admin-control.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path : '' , component : LoginComponent },
  { path : 'student' , component : StudentComponent },
  { path : 'admin' , component : AdminComponent },
  { path : 'admin/control' , component : AdminControlComponent},
  { path : '**' , component : PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
