import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorDashboardComponent } from './vendor-dashboard.component';
import { DopaymentComponent } from './payments/dopayment/dopayment.component';
import { PaymenthistoryComponent } from './payments/paymenthistory/paymenthistory.component';
import { NavpaymentsComponent } from './payments/navpayments/navpayments.component';
import { WhomtoletComponent } from './whomtolet/whomtolet.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';

const routes: Routes = [{
        path: 'vendordashboard',
    component: VendorDashboardComponent,
    children: [
      {
        path: 'dopayment',
        component :DopaymentComponent
      },
      {
        path: 'vendorpaymenthistory',
        component: PaymenthistoryComponent
      },
      {
        path: 'payments',
        component: NavpaymentsComponent,
      },
      {
        path: 'whomtolet',
        component: WhomtoletComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'viewprofile',
        component: ViewprofileComponent
      },
      {
        path: 'editprofile',
        component: EditprofileComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorDashboardRoutingModule { }
