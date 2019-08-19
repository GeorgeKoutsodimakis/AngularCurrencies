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
  baseImageUrl: string;
  coin: Coin;

  constructor(
    private coinsService: CoinsService,
    public router: Router) { }


  getAllCoins(): void {
    this.coinsService.getAllCoins().subscribe(response => {
      this.coinList = response.Data;
      this.baseImageUrl = response.BaseImageUrl;
    });
  }
  ngOnInit() {
    this.getAllCoins();
  }

  coinClick(event, coin: Coin) {
    this.router.navigate(['/coin', coin.Symbol]);
  }

}
