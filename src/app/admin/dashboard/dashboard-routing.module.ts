import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentComponent } from './component/component.component';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      { path: 'menu', component: MenuComponent },
      { path: 'component', component: ComponentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
