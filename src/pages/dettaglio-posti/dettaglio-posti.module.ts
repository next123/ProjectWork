import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DettaglioPostiPage } from './dettaglio-posti';

@NgModule({
  declarations: [
    DettaglioPostiPage,
  ],
  imports: [
    IonicPageModule.forChild(DettaglioPostiPage),
  ],
})
export class DettaglioPostiPageModule {}
