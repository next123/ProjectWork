import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PercorsiPage } from './percorsi';

@NgModule({
  declarations: [
    PercorsiPage,
  ],
  imports: [
    IonicPageModule.forChild(PercorsiPage),
  ],
})
export class PercorsiPageModule {}
