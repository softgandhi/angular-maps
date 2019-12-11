import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-state-info',
  templateUrl: './state-info.component.html',
  styleUrls: ['./state-info.component.scss']
})
export class StateInfoComponent implements OnInit {
  @Input() model: any = {};

  props = [
    { name: 'State', field: 'name' },
    { name: 'Capital', field: 'capital' },
    { name: 'Population', field: 'population' },
    { name: 'Latitude', field: 'lat' },
    { name: 'Longitude', field: 'lng' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
