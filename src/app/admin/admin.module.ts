import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { ViewprofilesComponent } from './viewprofiles/viewprofiles.component';

@NgModule({
  declarations: [LoginComponent, AdminComponent, ViewprofilesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
