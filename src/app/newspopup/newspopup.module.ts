import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewspopupPageRoutingModule } from './newspopup-routing.module';

import { NewspopupPage } from './newspopup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewspopupPageRoutingModule
  ],
  declarations: [NewspopupPage]
})
export class NewspopupPageModule {}
