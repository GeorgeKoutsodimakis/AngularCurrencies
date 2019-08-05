import { Component, OnInit } from '@angular/core';
import { Coin } from 'src/app/shared/Model/coin.model';
import { CoinInfoService } from 'src/app/shared/Services/coin.info.service';

@Component({
  selector: 'app-coin-info',
  templateUrl: './coin-info.component.html',
  styleUrls: ['./coin-info.component.css']
})
export class CoinInfoComponent implements OnInit {
  baseImgUrl = "https://www.cryptocompare.com"

  coin: Coin;
  constructor(public coinInfo: CoinInfoService) { }

  ngOnInit() {
    this.coin = new Coin();
    this.coinInfo.$coin.subscribe(value => {
      this.coin = value;
      console.log('coin' + this.coin.ImageUrl);
    })
  }

}
