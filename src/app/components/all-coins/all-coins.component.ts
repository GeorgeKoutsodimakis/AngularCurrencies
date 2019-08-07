import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/Model/currency.model';
import { CoinList } from 'src/app/shared/Model/coinList.model';
import { CurrencyService } from 'src/app/shared/Services/currency.service';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Router } from '@angular/router'
import { CoinInfoService } from 'src/app/shared/Services/coin.info.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.css']
})
export class AllCoinsComponent implements OnInit {

  currencies: Currency[];
  coinList: CoinList[];
  baseImageUrl: string;
  coin: Coin;

  constructor(
    private currencyService: CurrencyService,
    public router: Router,
    public coinInfo: CoinInfoService) { }
  // getCurrencies(): void {
  //   this.currencyService.getAllCurrencies()
  //     .subscribe(currencies => this.currencies = currencies);
  // }

  getAllCoins(): void {
    this.currencyService.getAllCoins().subscribe(response => {
      this.coinList = response.Data;
      this.baseImageUrl = response.BaseImageUrl;
    });
  }
  ngOnInit() {
    this.getAllCoins();
  }

  coinClick(event, coin: Coin) {
    console.log(coin.CoinName);
    this.coinInfo.setCoin(coin);
    this.router.navigate(['/coin']);
  }

}
