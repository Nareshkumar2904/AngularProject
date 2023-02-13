import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesignRoutingModule } from './design-routing.module';
import { CompassComponent } from './compass/compass.component';
import { TitleComponent } from './title/title.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CompassComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DesignRoutingModule
  ]
})
export class DesignModule { }
