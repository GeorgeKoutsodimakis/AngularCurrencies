import { Currency } from '../Model/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../Model/coin.model';
import { CoinList } from '../Model/coinList.model';
import { coinResponse } from '../Response/coinResponse.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://api.nexchange.io/en/api/v1/currency/';
  private coinUrl = 'https://min-api.cryptocompare.com/data/all/coinlist';

  constructor(private http: HttpClient) { }

  getAllCurrencies(): Observable<Currency[]> {
    console.log('heroes fetched from get');

    return this.http.get<Currency[]>(this.url);
  }

  getAllCoins(): Observable<coinResponse> {
    return this.http.get<coinResponse>(this.coinUrl);
  }
}
