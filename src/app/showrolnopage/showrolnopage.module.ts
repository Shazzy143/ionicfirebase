import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowrolnopagePageRoutingModule } from './showrolnopage-routing.module';

import { ShowrolnopagePage } from './showrolnopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowrolnopagePageRoutingModule
  ],
  declarations: [ShowrolnopagePage]
})
export class ShowrolnopagePageModule {}
