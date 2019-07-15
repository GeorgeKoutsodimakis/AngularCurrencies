import { CurrencyService } from './shared/Services/currency.service';
import { Component, OnInit } from '@angular/core';
import { Currency } from './shared/Model/currency.model';
import { Coin } from './shared/Model/coin.model';
import { CoinList } from './shared/Model/coinList.model';
import { coinResponse } from './shared/Response/coinResponse.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'crypto currency exchange';
  currencies: Currency[];
  coinList: CoinList[];

  constructor(private currencyService: CurrencyService) { }
  getCurrencies(): void {
    this.currencyService.getAllCurrencies()
      .subscribe(currencies => this.currencies = currencies);
  }

  getCoins(): void {
    this.currencyService.getAllCoins().subscribe(response => {
      this.coinList = response.Data;
      console.log(this.coinList);
    });
  }

  ngOnInit() {
    this.getCurrencies();
    this.getCoins();
  }
}
