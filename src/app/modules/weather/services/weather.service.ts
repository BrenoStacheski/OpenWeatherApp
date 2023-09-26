import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private API_URL = 'e7ff82875069749883114dcdb2378434';

  constructor(private httpClient: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    return this.httpClient.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&appid=${this.API_URL}`,
      {}
     );
   }
}
