import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ViewprofilesComponent } from './viewprofiles/viewprofiles.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children:[
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'viewprofiles',
        component:ViewprofilesComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
