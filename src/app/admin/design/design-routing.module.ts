import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompassComponent } from './compass/compass.component';
import { DesignComponent } from './design.component';
import { TitleComponent } from './title/title.component';

const routes: Routes = [
  {
    path: '', component: DesignComponent, children: [
      { path: 'compass', component: CompassComponent },
      {path: 'title', component: TitleComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignRoutingModule { }
