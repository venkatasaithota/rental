import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourselComponent } from './coursel/coursel.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'nav/home',
    pathMatch: 'full'
  }
  ,
  {
    path: 'nav',
    component:NavComponent,
    children:[
      {
        path: 'home',
        component: CourselComponent,
      },
      {
        path: 'aboutus',
        component: AboutusComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegistrationComponent
      },
    {path:'admin',loadChildren:()=>import('./admin/admin.module')},
    {path:'vendordashboard',loadChildren:()=>import('./vendor/vendor.module')},
    {path:'ownerdashboard',loadChildren:()=>import('./owner/owner.module')},

    
    ]
  }
  ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
