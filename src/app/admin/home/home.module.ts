import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContentComponent } from './content/content.component';
import { FolderComponent } from './folder/folder.component';


@NgModule({
  declarations: [
    ContentComponent,
    FolderComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
