import { Currency } from './currency';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://api.nexchange.io/en/api/v1/currency/';

  constructor(private http: HttpClient) {}

  getAllCurrencies(): Observable<Currency[]>{
    console.log('heroes fetched from get');

    return this.http.get<Currency[]>(this.url);
  }
}
