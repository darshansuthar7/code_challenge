import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import {WeatherData} from './WeatherData';

const httpOptions = {
 headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class WeatherService {
 weatherData: WeatherData;

 private weatherAPIUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=94040&appid=e13a36cc2c8a35cb8cd9609b5aeaf70b';  // URL to web api

 constructor(private http: HttpClient) { }
 
 getWeatherData(): Observable<WeatherData> {
   return this.http.get<WeatherData>(this.weatherAPIUrl);        
 }
   
}