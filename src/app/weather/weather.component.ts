import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { WeatherData } from '../weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})

export class WeatherComponent implements OnInit {
  weatherData: WeatherData;
  city: string;

  constructor(private weatherService: WeatherService) {

  }

  getWeather(): void {
    this.weatherService.get(this.city).subscribe(result => {
      this.weatherData = result;
    },
      error => console.error(error));
  }

  ngOnInit() {
  }

}
