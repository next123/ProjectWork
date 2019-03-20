import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Park } from '../../models/park';


@Injectable()
export class ParkDataProvider {

	public data: Park = null;

	constructor(public http: HttpClient) {
		console.log('Hello ParkDataProvider Provider');
	}

	public load() {
		// var req = new XMLHttpRequest();
		// req.open("GET", 'assets/data/data.json', false);
		// req.send(null);

		// return req.responseText;
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

	public getParks() {
		return this.load().then( data => {
			return data;
		});
	}

	// public getFilteredParks( queryString ) {
	// 	return this.load().then( parks => {
	// 		let filteredParks: any = [];
	// 		for (let p of parks) {
	// 			if (p.name.toLowerCase().indexOf(queryString.toLowerCase()) > -1) {
	// 				filteredParks.push(p);
	// 			}
	// 		}
	// 		return filteredParks;
	// 	});
	// }

}