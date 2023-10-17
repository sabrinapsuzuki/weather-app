import { Component, Input, OnInit } from '@angular/core';
import {
  faDroplet,
  faTemperatureHigh,
  faTemperatureLow,
  faWind,
} from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.scss'],
})
export class WeatherCardComponent implements OnInit {
  @Input() weatherDatas!: WeatherDatas;
  ngOnInit(): void {
    console.log('dados no componente filho:', this.weatherDatas);
  }

  minTemperatureIcon = faTemperatureLow;
  maxTemperatureIcon = faTemperatureHigh;
  humidityIcon = faDroplet;
  windIcon = faWind;
}
