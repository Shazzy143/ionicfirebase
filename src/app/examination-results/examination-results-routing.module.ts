import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExaminationResultsPage } from './examination-results.page';

const routes: Routes = [
  {
    path: '',
    component: ExaminationResultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExaminationResultsPageRoutingModule {}
