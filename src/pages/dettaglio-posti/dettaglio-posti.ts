import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-dettaglio-posti',
  templateUrl: 'dettaglio-posti.html',
})
export class DettaglioPostiPage {

  public placeInfo: Object;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtr:ViewController
    ) {
    
    this.placeInfo = this.navParams.get('data');

  }
  
  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
