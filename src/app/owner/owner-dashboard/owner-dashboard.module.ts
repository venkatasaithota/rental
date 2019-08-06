import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerDashboardRoutingModule } from './owner-dashboard-routing.module';
import { OwnerDashboardComponent } from './owner-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { NavprofileComponent } from './navprofile/navprofile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { FormsModule } from '@angular/forms';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { ViewhouseComponent } from './viewhouse/viewhouse.component';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { PaymentsComponent } from './payments/payments.component';
import { NavpaymentsComponent } from './payments/navpayments/navpayments.component';
import { AddpaymentsComponent } from './payments/addpayments/addpayments.component';
import { ViewpaymentsComponent } from './payments/viewpayments/viewpayments.component';
import { PaymenthistoryComponent } from './payments/paymenthistory/paymenthistory.component';
@NgModule({
// tslint:disable-next-line: max-line-length
  declarations: [ OwnerDashboardComponent , ProfileComponent, NavprofileComponent, ViewprofileComponent, EditprofileComponent, AddhouseComponent, ViewhouseComponent, ViewclientComponent, PaymentsComponent, NavpaymentsComponent, AddpaymentsComponent, ViewpaymentsComponent, PaymenthistoryComponent],
  imports: [
    CommonModule,
    OwnerDashboardRoutingModule,
    FormsModule,
  ]
})
export class OwnerDashboardModule { }
