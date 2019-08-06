import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CourselComponent } from './coursel/coursel.component';
import {FormsModule} from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { OwnerModule } from './owner/owner.module';
import { AdminModule } from './admin/admin.module';
import { VendorModule } from './vendor/vendor.module';
import { AuthorizationService } from './authorization.service';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CourselComponent,
    AboutusComponent,
    LoginComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OwnerModule,
    FormsModule,
    AdminModule,
    VendorModule,
    HttpClientModule,
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthorizationService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
