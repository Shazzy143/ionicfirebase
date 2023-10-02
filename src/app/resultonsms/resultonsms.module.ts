import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultonsmsPageRoutingModule } from './resultonsms-routing.module';

import { ResultonsmsPage } from './resultonsms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultonsmsPageRoutingModule
  ],
  declarations: [ResultonsmsPage]
})
export class ResultonsmsPageModule {}
