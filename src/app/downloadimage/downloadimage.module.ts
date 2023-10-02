import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadimagePageRoutingModule } from './downloadimage-routing.module';

import { DownloadimagePage } from './downloadimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DownloadimagePageRoutingModule
  ],
  declarations: [DownloadimagePage]
})
export class DownloadimagePageModule {}
