import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { SelectionComponent } from './selection/selection.component';
import { ServiceComponent } from './service.component';

const routes: Routes = [
  {
    path: '', component: ServiceComponent, children: [
      { path: 'selection', component: SelectionComponent },
      {path: 'address', component: AddressComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
