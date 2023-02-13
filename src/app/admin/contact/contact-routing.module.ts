import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';
import { FlexComponent } from './flex/flex.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: '', component: ContactComponent, children: [
      { path: 'flex', component: FlexComponent },
      {path: 'grid', component: GridComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
