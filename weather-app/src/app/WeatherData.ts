import {WeatherDateDetail} from './WeatherDateDetail';

export class WeatherData {
	cod: string;
	message: number;
	cnt: number;
	list: WeatherDateDetail[];
}
