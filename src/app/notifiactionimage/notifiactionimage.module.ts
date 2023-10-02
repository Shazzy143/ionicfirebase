import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotifiactionimagePageRoutingModule } from './notifiactionimage-routing.module';

import { NotifiactionimagePage } from './notifiactionimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotifiactionimagePageRoutingModule
  ],
  declarations: [NotifiactionimagePage]
})
export class NotifiactionimagePageModule {}
