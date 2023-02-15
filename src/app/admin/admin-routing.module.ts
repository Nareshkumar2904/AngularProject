import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { InputComponent } from './about/input/input.component';
import { OutputComponent } from './about/output/output.component';
import { AdminComponent } from './admin.component';
import { ContactComponent } from './contact/contact.component';
import { FlexComponent } from './contact/flex/flex.component';
import { GridComponent } from './contact/grid/grid.component';
import { ComponentComponent } from './dashboard/component/component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import { CompassComponent } from './design/compass/compass.component';
import { DesignComponent } from './design/design.component';
import { CardComponent } from './gallery/card/card.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageComponent } from './gallery/image/image.component';
import { ContentComponent } from './home/content/content.component';
import { FolderComponent } from './home/folder/folder.component';
import { HomeComponent } from './home/home.component';
import { AddressComponent } from './service/address/address.component';
import { SelectionComponent } from './service/selection/selection.component';
import { ServiceComponent } from './service/service.component';


const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: 'menu', component: MenuComponent },
          { path: 'component', component: ComponentComponent }
        ]
      },
      {
        path: 'home',
        component: HomeComponent,
        children: [
          { path: 'content', component: ContentComponent },
          { path: 'folder', component: FolderComponent }
        ]
      },
      {
        path: 'about',
        component: AboutComponent,
        children: [
          { path: 'input', component: InputComponent },
          { path: 'output', component: OutputComponent }
        ]
      },
      {
        path: 'design',
        component: DesignComponent,
        children: [
          { path: 'compass', component: CompassComponent },
          { path: 'title', component: FlexComponent }
        ]
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        children: [
          { path: 'card', component: CardComponent },
          { path: 'image', component: ImageComponent }
        ]
      },
      {
        path: 'service',
        component: ServiceComponent,
        children: [
          { path: 'address', component: AddressComponent },
          { path: 'selection', component: SelectionComponent }
        ]
      },
      {
        path: 'contact',
        component: ContactComponent,
        children: [
          { path: 'flex', component: FlexComponent },
          { path: 'grid', component: GridComponent }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
