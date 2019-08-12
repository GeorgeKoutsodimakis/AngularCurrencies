import { Injectable } from '@angular/core';
import { CoinInfoService } from './coin.info.service';
import { Coin } from '../Model/coin.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SymbolFullDataService {

  constructor(private http: HttpClient, private coinInfoService: CoinInfoService) { }

  url: string;

  getSymbolFullData(): Observable<any> {
    this.coinInfoService.$coin.subscribe(value => {
      this.url = "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + value.Symbol +
        "&tsyms=USD,EUR,ETH";
    });
    return this.http.get<any>(this.url);
  }



  // getSymbolFullData() {
  //   return this.http.get(this.url);
  // }


}
