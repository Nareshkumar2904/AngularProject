import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { ImageComponent } from './image/image.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    ImageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule
  ]
})
export class GalleryModule { }
