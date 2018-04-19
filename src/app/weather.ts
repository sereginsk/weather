
export class WeatherData {
  main: WeatherMainData;
}

interface WeatherMainData {
  temp: string;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
