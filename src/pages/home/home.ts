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
		
		//let image = 'assets/img/nps_arrowhead.png';
	
		this.map = new google.maps.Map(document.getElementById('map_canvas'), {
			zoom: 14,
			center: new google.maps.LatLng(45.4389304, 10.9904025),
			styles:
			[
				{
					"featureType": "administrative",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"lightness": 33
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [
						{
							"color": "#f7f7f7"
						},
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi.business",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#deecdb"
						}
					]
				},
				{
					"featureType": "poi.park",
					"elementType": "labels",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"lightness": 25
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [
						{
							"lightness": 25
						}
					]
				},
				{
					"featureType": "road",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "labels",
					"stylers": [
						{
							"saturation": -90
						},
						{
							"lightness": 25
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#ffffff"
						}
					]
				},
				{
					"featureType": "transit.line",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "transit.station",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#e0f1f9"
						}
					]
				}
			],
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		});

		this.load().then( result => {
			this.parks = result;
			console.log(this.parks)
			for (let p of this.parks) {
				let Pos: google.maps.LatLng = new google.maps.LatLng( p.lat, p.long);
				let Marker: google.maps.Marker = new google.maps.Marker();
				// console.log(parkMarker)
				// console.log(this.map)
				//let parkMarker: CustomMapMarker = new CustomMapMarker(p);
				Marker.setPosition(Pos);
				// if (Marker && Marker.setMap) {
				// 	Marker.setMap(null);
				// }
				Marker.setMap(this.map);
				//parkMarker.setIcon(image);

				google.maps.event.addListener(Marker, 'click', () => {
          let selectedMarker: any = Marker;
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