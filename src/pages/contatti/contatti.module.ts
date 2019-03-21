import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContattiPage } from './contatti';

@NgModule({
  declarations: [
    ContattiPage,
  ],
  imports: [
    IonicPageModule.forChild(ContattiPage),
  ],
})
export class ContattiPageModule {}
