import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})
export class Page1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public viewCtr:ViewController) {
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

}
