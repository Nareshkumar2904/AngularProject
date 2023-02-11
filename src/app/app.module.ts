import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { RegistrationComponent } from './component/reset-password/registration/registration.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { HomeComponent } from './admin/home/home.component';
import { DesignComponent } from './admin/design/design.component';
import { GalleryComponent } from './admin/gallery/gallery.component';
import { ServiceComponent } from './admin/service/service.component';
import { AboutComponent } from './admin/about/about.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    HomeComponent,
    DesignComponent,
    GalleryComponent,
    ServiceComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AdminModule
    
    
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
