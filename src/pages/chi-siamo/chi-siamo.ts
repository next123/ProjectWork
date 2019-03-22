import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-chi-siamo',
  templateUrl: 'chi-siamo.html',
})
export class ChiSiamoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public viewCtr:ViewController) {
  }



  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
