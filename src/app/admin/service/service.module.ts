import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { AddressComponent } from './address/address.component';
import { SelectionComponent } from './selection/selection.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddressComponent,
    SelectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
