import { Injectable } from '@angular/core';

@Injectable()
export class Config {
    static googleApiKey = '<Provide your api key here>';

    static defaultMap = {
        lat: 22.63010647687347,
        lng: 78.5537622890131,
    };
}
