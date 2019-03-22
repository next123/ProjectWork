import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { DettaglioPostiPage } from '../dettaglio-posti/dettaglio-posti';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-qr-scan',
  templateUrl: 'qr-scan.html',
})
export class QrScanPage {

  private scanSub :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public qrScanner: QRScanner
    ,public viewCtr:ViewController
    ,public mod :ModalController
    ) {
  }

ionViewDidLoad() {

// Optionally request the permission early
this.qrScanner.prepare()
  .then((status: QRScannerStatus) => {
     if (status.authorized) {
      this.qrScanner.show();
       // camera permission was granted
    
       // start scanning
       this.scanSub = this.qrScanner.scan().subscribe((text: any) => {
        //this.navCtrl.push( DettaglioPostiPage, { data: text })
      
         console.log('Scanned something', text);
         let var1 = this.mod.create(DettaglioPostiPage ,{ id: text.result });
         var1.present()
         this.qrScanner.hide(); // hide camera preview
         this.scanSub.unsubscribe(); // stop scanning
       });

     } else if (status.denied) {
      this.qrScanner.openSettings();
       // camera permission was permanently denied
       // you must use QRScanner.openSettings() method to guide the user to the settings page
       // then they can grant the permission from there
     } else {
       // permission was denied, but not permanently. You can ask for permission again at a later time.
     }
  })
  .catch((e: any) => console.log('Error is', e));

  }

  ionViewDidLeave(){
    this.qrScanner.destroy();
    this.qrScanner.hide(); // hide camera preview
    this.scanSub.unsubscribe(); // stop scanning
    this.scanSub = null;
  }


  closeModal()
  {
    this.viewCtr.dismiss();
  }
}
