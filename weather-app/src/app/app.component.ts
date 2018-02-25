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
            this.processData();
        });
    }
    processData(): void {
        for(let dtStr of this.dayDetail) {
            const d_item: Date = new Date(Date.parse(dtStr.dt_txt));
            this.dates.push(d_item.getDate() +"-" + (d_item.getMonth() + 1) +"-"+ d_item.getFullYear());	
        }
        this.dates = Array.from(new Set(this.dates))
        this.dates = this.dates.slice(0,5);
        this.showWeather(this.dates[0]);
     }

     showWeather(dateStr: string): void {
        this.hourlyData = [];
        this.forecastDate = dateStr;
        for(let dtStr of this.dayDetail) { 
            const d_item: Date = new Date(Date.parse(dtStr.dt_txt));
            var hourDate = d_item.getDate() +"-" + (d_item.getMonth() + 1) +"-"+ d_item.getFullYear();
            if(hourDate == dateStr) {
                this.hourlyData.push(dtStr);
            }
        }
     }
 
}


