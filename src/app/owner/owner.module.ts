import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import {FormsModule} from '@angular/forms';
import { OwnerDashboardModule } from './owner-dashboard/owner-dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    OwnerDashboardModule,
  ]
})
export class OwnerModule { }
