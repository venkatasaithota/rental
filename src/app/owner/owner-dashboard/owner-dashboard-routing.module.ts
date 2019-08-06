import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavprofileComponent } from './navprofile/navprofile.component';
import { OwnerDashboardComponent } from './owner-dashboard.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
import { AddhouseComponent } from './addhouse/addhouse.component';
import { ViewhouseComponent } from './viewhouse/viewhouse.component';
import { ViewclientComponent } from './viewclient/viewclient.component';
import { PaymentsComponent } from './payments/payments.component';
import { AddpaymentsComponent } from './payments/addpayments/addpayments.component';
import { ViewpaymentsComponent } from './payments/viewpayments/viewpayments.component';
import { PaymenthistoryComponent } from './payments/paymenthistory/paymenthistory.component';

const routes: Routes = [
  {
    path: 'ownerdashboard',
    component: OwnerDashboardComponent,
    children: [{
      path: 'profile',
      component: NavprofileComponent,
    },
    {
      path: 'viewprofile',
      component: ViewprofileComponent
    },
    {
      path: 'editprofile',
      component: EditprofileComponent
    },
    {
      path: 'addhouse',
      component: AddhouseComponent
    },
    {
      path: 'viewhouse',
      component: ViewhouseComponent
    },
    {
      path: 'viewclient',
      component: ViewclientComponent
    },
    {
      path: 'payments',
      component: PaymentsComponent
    },
    {path: 'addpayments',
    component: AddpaymentsComponent
    },
    {
      path: 'viewpayments',
      component: ViewpaymentsComponent
    },
    {
      path: 'paymenthistory',
      component: PaymenthistoryComponent
    }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerDashboardRoutingModule { }
