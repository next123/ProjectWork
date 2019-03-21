import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ChiSiamoPage } from '../chi-siamo/chi-siamo';
import { Page1Page } from '../page1/page1';
import { Page2Page } from '../page2/page2';
import { ContattiPage } from '../contatti/contatti';

@Component({
  selector: 'page-impostazione',
  templateUrl: 'impostazione.html',
})
export class ImpostazionePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public  modalCtr :ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImpostazionePage');
  }

  goToChiSiamo()
  {
    this.modalCtr.create(ChiSiamoPage);
  }
  goTopag1()
  {
    this.modalCtr.create(Page1Page);
  }
  goTopag2()
  {
    this.modalCtr.create(Page2Page);
  }
  goToContatti()
  {
    this.modalCtr.create(ContattiPage);
  }

}
