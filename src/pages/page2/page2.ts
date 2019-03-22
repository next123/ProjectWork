import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public viewCtr:ViewController) {
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
