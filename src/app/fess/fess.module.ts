import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FessPageRoutingModule } from './fess-routing.module';

import { FessPage } from './fess.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FessPageRoutingModule
  ],
  declarations: [FessPage]
})
export class FessPageModule {}
