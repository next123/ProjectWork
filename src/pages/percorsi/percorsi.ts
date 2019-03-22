import { Component } from '@angular/core';
import {  NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DettaglioPostiPage } from '../dettaglio-posti/dettaglio-posti';
import { ListaLuoghiPage } from '../lista-luoghi/lista-luoghi';



@Component({
  selector: 'page-percorsi',
  templateUrl: 'percorsi.html',
})
export class PercorsiPage {

  public places: Array<Object> = [];
  public percorsi: Array<Object> = [];
  public searchQuery: string = '';

  data: any = null;
  
  dataP: any = null;

  constructor(public navCtrl: NavController,
     public navParams: NavParams ,
     public loadingCtrl: LoadingController,
     public http: HttpClient,
     public modalCtr:ModalController) {
  }

  ionViewDidLoad() {
    let loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		loading.present();


    this.loadPercorsi().then( result => {
      this.percorsi = result;
		this.loadPlaces().then( result => {
			this.places = result;
			loading.dismiss();
    });  
  });  
  }
    
  loadPlaces() {
	
    if( this.data ) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('assets/data/data.json')
          .subscribe( (data: any) => {
            this.data = data;
            //console.log(data);
            resolve(this.data);
          });
    });
  }

  loadPercorsi() {
	
    if( this.data ) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('assets/data/dataPercorsi.json')
          .subscribe( (data: any) => {
            this.dataP = data;
            //console.log(data);
            resolve(this.dataP);
          });
    });
  }

  goPlaceDetails(place){
  console.log(place);
  const var1 = this.modalCtr.create( DettaglioPostiPage, { data: place })
    var1.present();
  }
  
  goPercorsiDetails(percorso){
    const var1 = this.modalCtr.create( ListaLuoghiPage, { data: percorso })
      var1.present();
    }
  
}
