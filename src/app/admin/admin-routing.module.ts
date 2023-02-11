import { ContentChildren, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DesignComponent } from './design/design.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';

const routes: Routes = [
  {
    path:'',
    component:AdminComponent,
    children:[
      {path:'dashboard', component:DashboardComponent},
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'design', component:DesignComponent},
      {path:'gallery', component:GalleryComponent},
      {path:'service', component:ServiceComponent},
      {path:'contact', component:ContactComponent},

    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
