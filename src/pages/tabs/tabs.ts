import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { ImpostazionePage } from '../impostazione/impostazione';
import { QrScanPage } from '../qr-scan/qr-scan';
import { PreferitiPage } from '../preferiti/preferiti';
import { PercorsiPage } from '../percorsi/percorsi';


@Component({
  selector:'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = PercorsiPage;
  tab3Root = QrScanPage;
  tab4Root = PreferitiPage;
  tab5Root = ImpostazionePage;

  constructor() {

  }
}
