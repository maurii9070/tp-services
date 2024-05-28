import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewsServicesService {
  country = 'us';
  apiKey = 'e3cc426546184474b6f623a961dacd48';

  constructor(private http: HttpClient) {}

  public getNews() {
    return this.http.get('https://newsapi.org/v2/top-headlines', {
      params: {
        country: this.country,
        apiKey: this.apiKey,
      },
    });
  }
}
