import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RollnoPage } from './rollno.page';

const routes: Routes = [
  {
    path: '',
    component: RollnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RollnoPageRoutingModule {}
