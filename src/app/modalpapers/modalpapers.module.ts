import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalpapersPageRoutingModule } from './modalpapers-routing.module';

import { ModalpapersPage } from './modalpapers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalpapersPageRoutingModule
  ],
  declarations: [ModalpapersPage]
})
export class ModalpapersPageModule {}
