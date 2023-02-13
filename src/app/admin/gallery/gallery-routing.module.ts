import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { GalleryComponent } from './gallery.component';
import { ImageComponent } from './image/image.component';

const routes: Routes = [
  {
    path: '', component: GalleryComponent, children: [
      { path: 'card', component: CardComponent },
      {path: 'image', component: ImageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule { }
