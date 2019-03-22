import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-partner',
  templateUrl: 'partner.html',
})
export class PartnerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public viewCtr:ViewController) {
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
