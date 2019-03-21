import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChiSiamoPage } from '../chi-siamo/chi-siamo';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { ContattiPage } from '../contatti/contatti';

@Component({
  selector: 'page-impostazione',
  templateUrl: 'impostazione.html',
})
export class ImpostazionePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpostazionePage');
  }

  goToChiSiamo()
  {
    this.navCtrl.push(ChiSiamoPage);
  }
  goTopag1()
  {
    this.navCtrl.push(Page1Page);
  }
  goTopag2()
  {
    this.navCtrl.push(Page2Page);
  }
  goToContatti()
  {
    this.navCtrl.push(ContattiPage);
  }

}
