import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarsServicesService {
  constructor(private http: HttpClient) {}

  public obtenerMarcas() {
    const url =
      'https://car-api2.p.rapidapi.com/api/makes?direction=asc&sort=id';
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'e0cf639359msh75c7747f5adb418p1b1a16jsn0e779fe7bce9',
        'x-rapidapi-host': 'car-api2.p.rapidapi.com',
      }),
    };

    return this.http.get(url, httpOptions);
  }

  public obtenerModelos(marca: string) {
    const url = 'https://car-api2.p.rapidapi.com/api/models?';

    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'e0cf639359msh75c7747f5adb418p1b1a16jsn0e779fe7bce9',
        'x-rapidapi-host': 'car-api2.p.rapidapi.com',
      }),
    };

    return this.http.get(url, {
      params: { make: marca, limit: 50, year: '2020' },
      headers: httpOptions.headers,
    });
  }
}
