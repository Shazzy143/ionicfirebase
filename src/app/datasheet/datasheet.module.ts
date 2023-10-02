import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DatasheetPageRoutingModule } from './datasheet-routing.module';

import { DatasheetPage } from './datasheet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatasheetPageRoutingModule
  ],
  declarations: [DatasheetPage]
})
export class DatasheetPageModule {}
