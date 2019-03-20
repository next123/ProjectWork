import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DettaglioPostiPage } from '../dettaglio-posti/dettaglio-posti';



@Component({
  selector: 'page-percorsi',
  templateUrl: 'percorsi.html',
})
export class PercorsiPage {

  public places: Array<Object> = [];
  public searchQuery: string = '';

  data: any = null;

  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
     public loadingCtrl: LoadingController,
     public http: HttpClient) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();

		this.load().then( result => {
			this.places = result;

			loading.dismiss();
    });  
  }
    
  load() {
	
    if( this.data ) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('assets/data/data.json')
          .subscribe( (data: any) => {
            this.data = data;
            console.log(data);
            resolve(this.data);
          });
    });
  }

  goPlaceDetails(place){
  console.log(place);
  this.navCtrl.push( DettaglioPostiPage, { data: place })

  }

}
