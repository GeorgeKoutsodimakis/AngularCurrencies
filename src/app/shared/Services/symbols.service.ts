import { Currency } from '../Model/currency.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coin } from '../Model/coin.model';
import { CoinList } from '../Model/coinlist.model';
import { CoinResponse } from '../Response/coin.response.model';
import { SymbolResponse } from '../Response/symbol.response';
import { CoinInfoService } from './coin.info.service';
import { url } from 'inspector';


@Injectable({
    providedIn: 'root'
})
export class SymbolsService {

    url: string
    constructor(private http: HttpClient, public coinInfo: CoinInfoService) { }

    getSymbols(): Observable<SymbolResponse[]> {
        this.coinInfo.$coin.subscribe(value => {
            this.url = "https://min-api.cryptocompare.com/data/price?fsym=" + value.Symbol + "&tsyms=USD,JPY,EUR,BTC,ETH";
        });
        return this.http.get<SymbolResponse[]>(this.url);
    }

}
