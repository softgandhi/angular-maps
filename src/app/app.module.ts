import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkerComponent } from './marker/marker.component';
import { ChooseLocationComponent } from './choose-location/choose-location.component';
import { MapIconsComponent } from './map-icons/map-icons.component';
import { ReverseGeocodingComponent } from './reverse-geocoding/reverse-geocoding.component';
import { StreetViewComponent } from './street-view/street-view.component';
import { CustomDetailComponent } from './custom-detail/custom-detail.component';
import { Config } from './config';
import { StateInfoComponent } from './state-info/state-info.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkerComponent,
    ChooseLocationComponent,
    MapIconsComponent,
    ReverseGeocodingComponent,
    StreetViewComponent,
    CustomDetailComponent,
    StateInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: Config.googleApiKey
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
