import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/shared/Model/currency.model';
import { CoinList } from 'src/app/shared/Model/coinList.model';
import { CoinsService } from 'src/app/shared/Services/coins.service';
import { Coin } from 'src/app/shared/Model/coin.model';
import { Router } from '@angular/router'

@Component({
  selector: 'app-all-coins',
  templateUrl: './all-coins.component.html',
  styleUrls: ['./all-coins.component.css']
})
export class AllCoinsComponent implements OnInit {

  coinList: CoinList[];
  coins: Coin[];
  cols: any[];
  keys: string[];
  image: string;
  totalRecords: number;
  baseUrl: string;

  constructor(
    private coinsService: CoinsService,
    public router: Router) { }

  ngOnInit() {
    this.coins = [];
    this.baseUrl = "https://www.cryptocompare.com"
    this.getAllCoins();
    this.cols = [
      { field: 'coin', header: 'coin' },
      { field: 'price', header: 'price' },
    ]
    console.log(this.coins);
  }

  getAllCoins() {
    this.coinsService.getAllCoins().subscribe(response => {
      this.coinList = response.Data;
      this.keys = Object.keys(this.coinList);
      this.keys.forEach(value => {
        this.coins.push(this.coinList[value]);
        this.totalRecords = this.coins.length;
      });

    });
  }

  coinClick(event, coin: Coin) {
    this.router.navigate(['/coin', coin.Symbol]);
  }

  getColumns() {
    return this.cols = [
      { field: 'coin', header: 'coin' },
      { field: 'price', header: 'Yepricear' },
    ]

  }

}
