import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-choose-location',
  templateUrl: './choose-location.component.html',
  styleUrls: ['./choose-location.component.scss']
})
export class ChooseLocationComponent implements OnInit {
  chosenLocation = null;
  map = Config.defaultMap;

  constructor() { }

  ngOnInit() {
  }

  mapClicked(event: any) {
    this.chosenLocation = event.coords;
  }

}
