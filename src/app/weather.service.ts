import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { WeatherData } from './weather';
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class WeatherService {
  private base: string = 'http://api.openweathermap.org/data/2.5/';
  constructor(private http: HttpClient) { }

  get(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(this.base + 'weather?appid=0ac04930ccb6c330c71e14cc68c76ea4&q=' + city);
  }

}
