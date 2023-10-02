import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadimagePage } from './downloadimage.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadimagePageRoutingModule {}
