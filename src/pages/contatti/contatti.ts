import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-contatti',
  templateUrl: 'contatti.html',
})
export class ContattiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtr:ViewController) {
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
