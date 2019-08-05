import { Injectable } from '@angular/core';
import { Coin } from '../Model/coin.model';
import { BehaviorSubject } from 'rxjs';
@Injectable()

export class CoinInfoService {
    constructor() { }

    private coin: BehaviorSubject<Coin> = new BehaviorSubject<Coin>(null);
    get $coin() {
        return this.coin.asObservable();
    }
    setCoin(value: Coin) {
        this.coin.next(value);
    }

}
