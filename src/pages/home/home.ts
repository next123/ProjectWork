import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { ParkDataProvider } from '../../provider/park-data/park-data';
import { Park } from '../../models/park';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


//import { ParkDetailsPage } from '../park-details/park-details';
//import { CustomMapMarker } from './custom-marker';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


	public map: google.maps.Map;
	parkData: ParkDataProvider;
	parks: any;
  data: any = null;
	//public parks: Array<Park> = [];

  constructor(public navCtrl: NavController,
		public platform: Platform,
		public http: HttpClient) {

	}
	
	public ionViewDidLoad() {
		this.platform.ready().then(() => {
			this.initializeMap();
		});
	}

	public initializeMap() {
		let minZoomLevel = 15;
		//let image = 'assets/img/nps_arrowhead.png';
	
		this.map = new google.maps.Map(document.getElementById('map_canvas'), {
			zoom: minZoomLevel,
			center: new google.maps.LatLng(45.4299, 10.98444),
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		this.load().then( result => {
			this.parks = result;
			console.log(this.parks)
			for (let p of this.parks) {
				let parkPos: google.maps.LatLng = new google.maps.LatLng( p.lat, p.long);
				let parkMarker: google.maps.Marker = new google.maps.Marker();
				// console.log(parkMarker)
				// console.log(this.map)
				//let parkMarker: CustomMapMarker = new CustomMapMarker(p);
				parkMarker.setPosition(parkPos);
				parkMarker.setMap(this.map);
				//parkMarker.setIcon(image);

				google.maps.event.addListener(parkMarker, 'click', () => {
          let selectedMarker: any = parkMarker;
          this.navCtrl.push(HomePage, {
            parkData: selectedMarker.parkData
          });
        });
			}
		});

}

public load() {
	
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

// public setToPosition(Long ,Lat) {
// 	this.map.setCenter(new google.maps.LatLng( Lat, Long ) );
// }

}