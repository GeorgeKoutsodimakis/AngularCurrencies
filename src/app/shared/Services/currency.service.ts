import { Currency } from '../Model/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../Model/coin.model';
import { CoinList } from '../Model/coinlist.model';
import { CoinResponse } from '../Response/coin.response.model';


@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private url = 'https://api.nexchange.io/en/api/v1/currency/';
  private coinUrl = 'https://min-api.cryptocompare.com/data/all/coinlist';

  constructor(private http: HttpClient) { }

  getAllCurrencies(): Observable<Currency[]> {
    return this.http.get<Currency[]>(this.url);
  }

  getAllCoins(): Observable<CoinResponse> {
    return this.http.get<CoinResponse>(this.coinUrl);
  }
}
