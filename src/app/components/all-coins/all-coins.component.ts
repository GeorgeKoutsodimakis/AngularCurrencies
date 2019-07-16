import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/Model/currency.model';
import { CoinList } from 'src/app/shared/Model/coinList.model';
import { CurrencyService } from 'src/app/shared/Services/currency.service';

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.css']
})
export class AllCoinsComponent implements OnInit {

  currencies: Currency[];
  coinList: CoinList[];
  baseImageUrl: string;

  constructor(private currencyService: CurrencyService) { }
  // getCurrencies(): void {
  //   this.currencyService.getAllCurrencies()
  //     .subscribe(currencies => this.currencies = currencies);
  // }

  getAllCoins(): void {
    this.currencyService.getAllCoins().subscribe(response => {
      this.coinList = response.Data;
      this.baseImageUrl = response.BaseImageUrl;
      console.log(this.baseImageUrl);
    });
  }
  ngOnInit() {
    this.getAllCoins();
  }

}
