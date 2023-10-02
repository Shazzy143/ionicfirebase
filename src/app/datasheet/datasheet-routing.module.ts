import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatasheetPage } from './datasheet.page';

const routes: Routes = [
  {
    path: '',
    component: DatasheetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatasheetPageRoutingModule {}
