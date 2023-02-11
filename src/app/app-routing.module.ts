import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './component/login-page/login-page.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './component/reset-password/registration/registration.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'resetpassword',
    component: ResetPasswordComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  // {
  //   path: 'dashboard',
  //   loadChildren: () => import('./admin/dashboard/dashboard.module').then(m => m.DashboardModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./admin/home/home.module').then(m => m.HomeModule)
  // }, {
  //   path: 'design',
  //   loadChildren: () => import('./admin/design/design.module').then(m => m.DesignModule)
  // },
  // {
  //   path: 'gallery',
  //   loadChildren: () => import('./admin/gallery/gallery.module').then(m => m.GalleryModule)
  // },
  // {
  //   path: 'service',
  //   loadChildren: () => import('./admin/service/service.module').then(m => m.ServiceModule)
  // },
  // {
  //   path: 'contact',
  //   loadChildren: () => import('./admin/contact/contact.module').then(m => m.ContactModule)
  // },

  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
