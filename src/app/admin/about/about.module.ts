import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';


@NgModule({
  declarations: [
    InputComponent,
    OutputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
