import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowresultpagePageRoutingModule } from './showresultpage-routing.module';

import { ShowresultpagePage } from './showresultpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowresultpagePageRoutingModule
  ],
  declarations: [ShowresultpagePage]
})
export class ShowresultpagePageModule {}
