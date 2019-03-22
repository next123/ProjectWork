import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { DettaglioPostiPage } from '../dettaglio-posti/dettaglio-posti';

@Component({
  selector: 'page-lista-luoghi',
  templateUrl: 'lista-luoghi.html',
})
export class ListaLuoghiPage {
	public places : any[];
  public placeInfo: any;
  data: any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams
    ,public viewCtr:ViewController,
    public http: HttpClient,
    public modalCtr:ModalController) {
      this.places = [];
    this.placeInfo = this.navParams.get('data');

  }  

  ionViewDidLoad() {
    console.log();
    this.loadPlaces().then( result => {
      console.log(result)
      result.forEach(element => {
        if(element.idPercorso == this.placeInfo.id)
        {
          console.log(element)
        this.places.push(element);
        }
      });
    });  
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

  loadPlaces() {
	
    if( this.data ) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('assets/data/data.json')
          .subscribe( (data: any) => {
            this.data = data;
            resolve(this.data);
          });
    });
  }


  goPlaceDetails(place){
    console.log(place);
    const var1 = this.modalCtr.create( DettaglioPostiPage, { data: place })
      var1.present();
    }

}
