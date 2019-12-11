import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MarkerComponent } from './marker/marker.component';
import { ChooseLocationComponent } from './choose-location/choose-location.component';
import { ReverseGeocodingComponent } from './reverse-geocoding/reverse-geocoding.component';
import { MapIconsComponent } from './map-icons/map-icons.component';
import { CustomDetailComponent } from './custom-detail/custom-detail.component';
import { StreetViewComponent } from './street-view/street-view.component';

const routes: Routes = [
  { path: 'home', component: MarkerComponent },
  { path: 'choose-location', component: ChooseLocationComponent },
  { path: 'custom-detail', component: CustomDetailComponent },
  { path: 'map-icons', component: MapIconsComponent },
  { path: 'marker', component: MarkerComponent },
  { path: 'reverse-geocoding', component: ReverseGeocodingComponent },
  { path: 'street-view', component: StreetViewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
