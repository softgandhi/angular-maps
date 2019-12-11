import { Component, OnInit } from '@angular/core';
import { Config } from '../config';

@Component({
  selector: 'app-map-icons',
  templateUrl: './map-icons.component.html',
  styleUrls: ['./map-icons.component.scss']
})
export class MapIconsComponent implements OnInit {
  map = Config.defaultMap;
  states = [];
  colors = [
    { name: 'Blue', iconUrl: 'images/blue.png' },
    { name: 'Black', iconUrl: 'images/black.png' },
    { name: 'Green', iconUrl: 'images/green.png' },
    { name: 'Red', iconUrl: 'images/red.png' },
    { name: 'Yellow', iconUrl: 'images/yellow.png' },
  ];
  iconUrl = this.colors[0].iconUrl;

  constructor() { }

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    const response = await fetch('/data/indian-states.json');
    this.states = await response.json();
    console.log(this.states);
  }

  setIcon(color: any) {
    this.iconUrl = color.iconUrl;
  }
}
