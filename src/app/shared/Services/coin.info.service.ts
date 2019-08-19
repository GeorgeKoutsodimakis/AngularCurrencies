import { Injectable } from "@angular/core";
import { CoinInfoResponse } from '../Response/coin.info.response';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class CoinInfoService {

    url: string;
    constructor(private http: HttpClient) { }


    getCoinInfo(coinName: string): Observable<CoinInfoResponse> {
        //given currncies USD and EUR
        this.url = " https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" + coinName + "&tsyms=USD,EUR"
        return this.http.get<CoinInfoResponse>(this.url);
    }
}