import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-street-view',
  templateUrl: './street-view.component.html',
  styleUrls: ['./street-view.component.scss']
})
export class StreetViewComponent implements OnInit {
  streetUrl = '';
  chosenLocation = null;
  map = Config.defaultMap;

  constructor() { }

  ngOnInit() {
  }

  mapClicked(event: any) {
    this.chosenLocation = event.coords;
    this.setStreetUrl(this.chosenLocation.lat, this.chosenLocation.lng);
  }

  setStreetUrl(lat: number, lng: number) {
    this.streetUrl = `https://maps.googleapis.com/maps/api/streetview?size=300x200&location=${lat},${lng}&key=${Config.googleApiKey}`;
  }
}
