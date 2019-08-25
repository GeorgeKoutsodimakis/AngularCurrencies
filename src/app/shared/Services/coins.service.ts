import { Currency } from '../Model/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../Model/coin.model';
import { CoinList } from '../Model/coinlist.model';
import { CoinResponse } from '../Response/coin.response.model';
import { CoinInfoResponse } from '../Response/coin.info.response';
import { CoinCurrencyModel } from '../Model/coin.curency.model';


@Injectable({
  providedIn: 'root'
})
export class CoinsService {
  private url = 'https://api.nexchange.io/en/api/v1/currency/';
  private coinUrl = 'https://min-api.cryptocompare.com/data/all/coinlist';

  constructor(private http: HttpClient) { }

  // getAllCoins(): Observable<CoinResponse> {
  //   return this.http.get<CoinResponse>(this.coinUrl);
  // }


  getAllCoins() {
    return this.http.get<CoinResponse>(this.coinUrl)
      .toPromise()
      .then(res => <CoinList[]>res.Data)
      .then(Data => { return Data });
  }

  getAllCoinsInfo(coins: string) {
    return this.http.get<CoinInfoResponse>("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coins + "&tsyms=USD")
      .toPromise()
      .then(res => <CoinCurrencyModel>res.DISPLAY)
      .then(DISPLAY => { return DISPLAY })
  }
}
