import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FlexComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ContactRoutingModule
  ]
})
export class ContactModule { }
