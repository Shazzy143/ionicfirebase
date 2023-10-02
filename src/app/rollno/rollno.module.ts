import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RollnoPageRoutingModule } from './rollno-routing.module';

import { RollnoPage } from './rollno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RollnoPageRoutingModule
  ],
  declarations: [RollnoPage]
})
export class RollnoPageModule {}
