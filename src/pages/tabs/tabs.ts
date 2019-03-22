import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ImpostazionePage } from '../impostazione/impostazione';
import { QrScanPage } from '../qr-scan/qr-scan';
import { PreferitiPage } from '../preferiti/preferiti';
import { PercorsiPage } from '../percorsi/percorsi';
import { ModalController } from 'ionic-angular';


@Component({
  selector:'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PercorsiPage;
 
  tab4Root = PreferitiPage;
  tab5Root = ImpostazionePage;

  constructor(public modalCtrl:ModalController) {

  }

  qrScan(){
    let modal = this.modalCtrl.create(QrScanPage);
    modal.present();
  }
}
