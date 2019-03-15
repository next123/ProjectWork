import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImpostazionePage } from './impostazione';

@NgModule({
  declarations: [
    ImpostazionePage,
  ],
  imports: [
    IonicPageModule.forChild(ImpostazionePage),
  ],
})
export class ImpostazionePageModule {}
