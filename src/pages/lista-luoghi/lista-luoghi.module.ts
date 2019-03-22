import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaLuoghiPage } from './lista-luoghi';

@NgModule({
  declarations: [
    ListaLuoghiPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaLuoghiPage),
  ],
})
export class ListaLuoghiPageModule {}
