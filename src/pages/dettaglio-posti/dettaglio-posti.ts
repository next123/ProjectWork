import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-dettaglio-posti',
  templateUrl: 'dettaglio-posti.html',
})
export class DettaglioPostiPage {

  public placeInfo: Object;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.placeInfo = this.navParams.data.data;

  }
  


}
