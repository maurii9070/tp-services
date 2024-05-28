import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CriptomonedasService {
  constructor(private http: HttpClient) {}

  getCriptomonedas() {
    return this.http.get(
      'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
    );
  }

  getCotizacion(moneda: string, cripto: string) {
    return this.http.get(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`
    );
  }
}
