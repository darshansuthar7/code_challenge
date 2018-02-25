import { Component, OnInit } from '@angular/core';

import {WeatherDateDetail} from './WeatherDateDetail';
import {WeatherService} from './WeatherService';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    dates: string[] = [];
    forecastDate: string;
    dayDetail: WeatherDateDetail[] = [];
    hourlyData: WeatherDateDetail[] = [];


    constructor(private weatherService: WeatherService){}
 
    ngOnInit(): void {
        this.setWeatherData();
    }
 
    setWeatherData(): void {
        this.weatherService.getWeatherData()
        .subscribe(data => {
        for(let elem of data.list) {
        this.dayDetail.push(elem);
        }
        //console.log(this.dayDetail);
        });
    }
 
}

