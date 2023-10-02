import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultcardPageRoutingModule } from './resultcard-routing.module';

import { ResultcardPage } from './resultcard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultcardPageRoutingModule
  ],
  declarations: [ResultcardPage]
})
export class ResultcardPageModule {}
