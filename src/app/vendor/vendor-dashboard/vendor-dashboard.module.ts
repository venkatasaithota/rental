import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDashboardRoutingModule } from './vendor-dashboard-routing.module';
import { PaymentsComponent } from './payments/payments.component';
import { NavpaymentsComponent } from './payments/navpayments/navpayments.component';
import { VendorDashboardComponent } from './vendor-dashboard.component';
import { DopaymentComponent } from './payments/dopayment/dopayment.component';
import { PaymenthistoryComponent } from './payments/paymenthistory/paymenthistory.component';
import { WhomtoletComponent } from './whomtolet/whomtolet.component';
import { ProfileComponent } from './profile/profile.component';
import { NavprofileComponent } from './profile/navprofile/navprofile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import {FormsModule} from '@angular/forms';
import { SearchPipe } from './search.pipe';

@NgModule({
  declarations: [PaymentsComponent, NavpaymentsComponent,VendorDashboardComponent, DopaymentComponent, PaymenthistoryComponent, WhomtoletComponent, ProfileComponent, NavprofileComponent, ViewprofileComponent, EditprofileComponent, SearchPipe],
  imports: [
    CommonModule,
    VendorDashboardRoutingModule,
    FormsModule,
  ]
})
export class VendorDashboardModule { }
