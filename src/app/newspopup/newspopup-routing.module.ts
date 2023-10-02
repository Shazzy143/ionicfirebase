import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewspopupPage } from './newspopup.page';

const routes: Routes = [
  {
    path: '',
    component: NewspopupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewspopupPageRoutingModule {}
