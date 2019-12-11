import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-reverse-geocoding',
  templateUrl: './reverse-geocoding.component.html',
  styleUrls: ['./reverse-geocoding.component.scss']
})
export class ReverseGeocodingComponent implements OnInit {
  address = '';
  chosenLocation = null;
  map = {
    lat: 22.63010647687347,
    lng: 78.5537622890131,
  };

  constructor() { }

  ngOnInit() {
    this.getAddress(21.775693565710235, 79.0811060390131);
  }

  mapClicked(event: any) {
    this.chosenLocation = event.coords;
    this.getAddress(this.chosenLocation.lat, this.chosenLocation.lng);
  }

  async getAddress(lat: number, lng: number) {
    const mapUrl = 'https://maps.googleapis.com/maps/api/geocode/json?key=' + Config.googleApiKey;

    const response = await fetch(`${mapUrl}&latlng=${lat},${lng}`);
    const res = await response.json();

    this.address = (res && res.results) ? res.results[0].formatted_address : 'Address not found';
    console.log(this.address);
    return this.address;
  }
}
