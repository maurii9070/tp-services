import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslateServiceService {
  constructor(private http: HttpClient) {}

  public getLanguajes(source: string, target: string, text: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'x-rapidapi-key': 'e0cf639359msh75c7747f5adb418p1b1a16jsn0e779fe7bce9',
        'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post(
      'https://google-translator9.p.rapidapi.com/v2',
      {
        q: text,
        source: source,
        target: target,
        format: 'text',
      },
      httpOptions
    );
  }
}
