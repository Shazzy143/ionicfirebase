import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResultonsmsPage } from './resultonsms.page';

const routes: Routes = [
  {
    path: '',
    component: ResultonsmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResultonsmsPageRoutingModule {}
