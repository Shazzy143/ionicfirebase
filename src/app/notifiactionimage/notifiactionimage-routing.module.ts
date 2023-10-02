import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotifiactionimagePage } from './notifiactionimage.page';

const routes: Routes = [
  {
    path: '',
    component: NotifiactionimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotifiactionimagePageRoutingModule {}
