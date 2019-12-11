import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-custom-detail',
  templateUrl: './custom-detail.component.html',
  styleUrls: ['./custom-detail.component.scss']
})
export class CustomDetailComponent implements OnInit {
  map = Config.defaultMap;
  states = [];

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const response = await fetch('/data/indian-states.json');
    this.states = await response.json();
    console.log(this.states);
  }

  mapClicked(event: any) {
    console.log(event);
  }

  onMarkerClick(state) {
    console.log(state);
  }
}
