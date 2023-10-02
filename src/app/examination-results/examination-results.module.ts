import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExaminationResultsPageRoutingModule } from './examination-results-routing.module';

import { ExaminationResultsPage } from './examination-results.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExaminationResultsPageRoutingModule
  ],
  declarations: [ExaminationResultsPage]
})
export class ExaminationResultsPageModule {}
