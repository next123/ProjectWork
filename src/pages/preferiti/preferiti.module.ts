import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreferitiPage } from './preferiti';

@NgModule({
  declarations: [
    PreferitiPage,
  ],
  imports: [
    IonicPageModule.forChild(PreferitiPage),
  ],
})
export class PreferitiPageModule {}
