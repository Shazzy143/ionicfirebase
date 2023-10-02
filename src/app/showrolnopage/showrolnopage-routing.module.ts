import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowrolnopagePage } from './showrolnopage.page';

const routes: Routes = [
  {
    path: '',
    component: ShowrolnopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowrolnopagePageRoutingModule {}
