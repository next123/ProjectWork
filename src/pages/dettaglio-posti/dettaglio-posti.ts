import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'page-dettaglio-posti',
  templateUrl: 'dettaglio-posti.html',
})
export class DettaglioPostiPage {
  public placeData: any[];
  public placeInfo: Object;
  public idPlace: any;
  public data :any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtr:ViewController,
    public http : HttpClient
    ) {
    
    
    this.idPlace =  this.navParams.get('id');
  }
  
  public ionViewDidLoad() {

    console.log(this.placeInfo)

    if(this.idPlace != null)
    {
      this.loadPlaces().then( result => {
       
        result.forEach(element => {               
        if(element.id == this.idPlace)
          this.placeInfo = element;
      });
    });  
      
    }else
    this.placeInfo = this.navParams.get('data');
  }

  closeModal()
  {
    this.viewCtr.dismiss();
  }

  loadPlaces()
  {
	
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

}
