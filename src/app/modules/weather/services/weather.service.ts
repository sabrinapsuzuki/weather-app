import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private api_key: string = '9c4c74ea7a1f47cf4cb8d3c9eabf1b21';

  constructor(private http: HttpClient) {}

  getWeatherDatas(cityName: string): Observable<any> {
    return this.http.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.api_key}`,
      {}
    );
  }
}
