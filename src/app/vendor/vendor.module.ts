import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorRoutingModule } from './vendor-routing.module';
import { VendorDashboardModule } from './vendor-dashboard/vendor-dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    VendorRoutingModule,
    VendorDashboardModule
  ]
})
export class VendorModule { }
