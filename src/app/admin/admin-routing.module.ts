import { ContentChildren, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { DesignComponent } from './design/design.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../admin/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'home', loadChildren: () => import('../admin/home/home.module').then(m => m.HomeModule) },
      { path: 'about', loadChildren: () => import('../admin/about/about.module').then(m => m.AboutModule) },
      { path: 'design', loadChildren: () => import('../admin/design/design.module').then(m => m.DesignModule) },
      { path: 'gallery', loadChildren: () => import('../admin/gallery/gallery.module').then(m => m.GalleryModule) },
      { path: 'service', loadChildren: () => import('../admin/service/service.module').then(m => m.ServiceModule) },
      { path: 'contact', loadChildren: () => import('../admin/contact/contact.module').then(m => m.ContactModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
