import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FessPage } from './fess.page';

const routes: Routes = [
  {
    path: '',
    component: FessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FessPageRoutingModule {}
