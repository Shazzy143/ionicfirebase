import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalpapersPage } from './modalpapers.page';

const routes: Routes = [
  {
    path: '',
    component: ModalpapersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalpapersPageRoutingModule {}
