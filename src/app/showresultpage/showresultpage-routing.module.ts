import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowresultpagePage } from './showresultpage.page';

const routes: Routes = [
  {
    path: '',
    component: ShowresultpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowresultpagePageRoutingModule {}
